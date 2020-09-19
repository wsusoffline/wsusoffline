/*
  sample:
    redirect all https://httpbin.org/user-agent requests to http://localhost:8008/index.html
  test:
    curl https://httpbin.org/user-agent --proxy http://127.0.0.1:8001
  expected response:
    'hello world' from 127.0.0.1:8001/index.html
*/
const fs = require("fs");
const path = require("path");
const spawn = require("child_process").spawn;
const Deferred = require("promise-defer");
const httpServer = require("http-server");
const colors = require("colors/safe");

function getBasename(url) {
  const tokens = url.split("/");
  const basename = tokens[tokens.length - 1];
  return basename;
}

function genResponse(requestDetail, basename) {
  const newRequestOptions = requestDetail.requestOptions;
  const headers = JSON.parse(JSON.stringify(newRequestOptions.headers))
  headers.Host = "127.0.0.1"
  return {
    protocol: "http",
    requestOptions: {
      hostname: "127.0.0.1",
      port: "8080",
      path: "/" + basename,
      method: "GET",
      headers: headers
    }
  }
}

function genResponseFromUri(requestDetail, url) {
  // console.log(JSON.stringify(requestDetail.requestOptions))
  console.log(`proxy ${requestDetail.url} to ${url}`);
  const urlObject = new URL(url);
  const headers = JSON.parse(JSON.stringify(requestDetail.requestOptions.headers))
  headers.Host = urlObject.hostname
  return {
    protocol: urlObject.protocol.substr(0, urlObject.protocol.length - 1),
    requestOptions: {
      hostname: urlObject.hostname,
      port: urlObject.port,
      path: urlObject.pathname,
      method: "GET",
      headers: headers
    }
  }
}

const archiveList = [
  // "https://web.archive.org/web/20170829230259if_/http://www.download.windowsupdate.com/msdownload/update/v3/static/trustedr/en/rootsupd.exe",

  "https://web.archive.org/web/20140705033545if_/http://www.download.windowsupdate.com/msdownload/update/v3/static/trustedr/en/rootsupd.exe", // 有数字签名
  "https://web.archive.org/web/20140418093851if_/http://download.microsoft.com/download/0/E/6/0E60F1EB-4E0A-4D3A-B4D1-20D9D405499A/rvkroots.exe",
  "https://web.archive.org/web/20051205010652if_/http://download.microsoft.com:80/download/0/e/d/0eda9ae6-f5c9-44be-98c7-ccc3016a296a/ork.exe",
  "https://web.archive.org/web/20120616232938if_/http://download.microsoft.com/download/0/8/B/08B02B55-655C-49FF-9170-7BC0C231B868/OFV.exe",
  "https://web.archive.org/web/20140418100408if_/http://download.microsoft.com/download/B/D/8/BD8C8637-1E07-4519-B501-FAAF28CFD7A3/proofloc2010-kb2760781-fullfile-x86-glb.exe",
  "https://web.archive.org/web/20140418095550if_/http://download.microsoft.com/download/6/5/1/6511CAC1-530B-47F6-BBE5-22021F612072/convloc2007-kb2760415-fullfile-x86-glb.exe",
  "https://web.archive.org/web/20120203140424if_/http://download.microsoft.com/download/3/9/A/39A9BC06-AB8C-4097-80D7-755012D9B9C3/office2007spuninstall.exe",
  "https://web.archive.org/web/20160202075855if_/https://download.microsoft.com/download/9/2/2/9222D67F-7630-4F49-BD26-476B51517FC1/FileFormatConverters.exe",
  "https://web.archive.org/web/20120317172326if_/http://download.microsoft.com/download/D/2/9/D2906267-82B7-4F8C-B1D8-B24C461A5653/compatibilitypacksp3-kb2526297-fullfile-en-us.exe",
  "http://download.sysinternals.com/files/AutoLogon.zip",
  "http://download.sysinternals.com/files/Sigcheck.zip",
  "http://download.sysinternals.com/files/Streams.zip",
];

const basenameToUriMap = {
  "WindowsXP-KB953356-x86-ENU.exe":
    "http://www.download.windowsupdate.com/msdownload/update/software/crup/2008/05/windowsxp-kb953356-x86-enu_cc2acdd2ef74cbf90896322a2c3d52c8bf908e0c.exe",
  "WindowsXP-KB969084-x86-chs.exe":
    "http://download.windowsupdate.com/msdownload/update/software/updt/2009/11/windowsxp-kb969084-x86-chs_bbe85fd63f2cae2ef9cd6428f8648e51e9b9cf9f.exe",
  "WindowsXP-KB969084-x86-enu.exe":
    "http://download.windowsupdate.com/msdownload/update/software/updt/2009/11/windowsxp-kb969084-x86-enu_153587172bf060ddc9d2c966f1eaaf4f47926f28.exe",
  "wmp11-windowsxp-x86-zh-cn.exe":
    "http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-zh-cn_0e21e73634c94f5e3b81d3e74d0867601c7a6a35.exe",
  "wmp11-windowsxp-x86-enu.exe":
    "http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-enu_f6f975548c03c3761ab4ce55f80d1e17ae353428.exe",
};

function *beforeSendRequest(requestDetail) {
  const basename = getBasename(requestDetail.url);
  for (const archiveUrl of archiveList) {
    let urlToCompare = archiveUrl;
    if (archiveUrl.startsWith("https://web.archive.org/")) {
      urlToCompare = archiveUrl.substr(
        "https://web.archive.org/web/20170829230259if_/".length
      );
    }
    if (urlToCompare.toLowerCase() === requestDetail.url.toLowerCase()) {
      console.log(`proxy ${requestDetail.url} to ${archiveUrl}`);
      return genResponse(requestDetail, basename);
    }
  }
  if (basename in basenameToUriMap) {
    return genResponseFromUri(requestDetail, basenameToUriMap[basename]);
  }
}

module.exports = {
  beforeSendRequest: beforeSendRequest,
  *beforeDealHttpsRequest() {
    return true;
  },
};

async function downloadSingle(archiveUrl) {
  const basename = getBasename(archiveUrl);
  const filesDir = path.join(__dirname, "files");
  if (fs.existsSync(path.join(filesDir, basename))) {
    return;
  }
  console.log(`Downloading ${archiveUrl}`);
  const ps = spawn(
    "curl",
    ["-R", "-O", "-x", "socks5h://127.0.0.1:7073", archiveUrl],
    { stdio: "inherit", detached: false, cwd: filesDir }
  );
  const defer = new Deferred();
  ps.on("close", (code) => {
    console.log(`Process close with ${code}`);
    defer.resolve();
  });
  await defer.promise;
}

async function downloadAll() {
  console.log(archiveList);
  for (let i = 0; i < archiveList.length; i += 1) {
    await downloadSingle(archiveList[i]);
  }
}

function startHttpServer() {
  var server = httpServer.createServer({
    root: path.join(__dirname, "files"),
    showDir: true,
  });
  const logger = {
    info: console.log,
    request: function () {},
  };
  const host = "127.0.0.1";
  const ssl = false;
  const port = 8080;
  server.listen(port, host, () => {
    var canonicalHost = host === "0.0.0.0" ? "127.0.0.1" : host,
      protocol = ssl ? "https://" : "http://";

    logger.info(
      [
        colors.yellow("Starting up http-server, serving "),
        colors.cyan(server.root),
        ssl ? colors.yellow(" through") + colors.cyan(" https") : "",
        colors.yellow("\nAvailable on:"),
      ].join("")
    );

    logger.info(
      "  " + protocol + canonicalHost + ":" + colors.green(port.toString())
    );
  });
}

if (require.main === module) {
  downloadAll();
} else {
  if (process.env.JEST_WORKER_ID === undefined) {
    startHttpServer();
  }
}

// anyproxy -s --rule rules.js 
// node rules.js
// curl -R -O -x socks5h://127.0.0.1:7073 http://download.sysinternals.com/files/Streams.zip
// curl -R -O -x http://127.0.0.1:8001 http://download.microsoft.com/download/3/9/6/39691b06-7bfa-4736-89e4-2738e6023b6c/wmp11-windowsxp-x86-zh-cn.exe