const rules = require( "../rules");
const { describe, expect, it } = require("@jest/globals");

describe("Test rules", () => {
  function requestUrl(url) {
    const requestDetail ={
      url: url,
      requestOptions: {
        headers: {}
      }
    }
    const info = rules.beforeSendRequest(requestDetail).next().value;
    if (!info) {
      return url
    }
    const result = new URL(url)
    result.protocol = info.protocol + ":"
    result.hostname = info.requestOptions.hostname
    result.port = info.requestOptions.port
    result.pathname = info.requestOptions.path
    return result.href
  }

  it("test something", () => {
      expect(requestUrl('http://download.microsoft.com/download/0/E/6/0E60F1EB-4E0A-4D3A-B4D1-20D9D405499A/rvkroots.exe'))
        .toEqual('http://127.0.0.1:8080/rvkroots.exe')
      expect(requestUrl('http://download.microsoft.com/download/0/c/6/0c609742-5507-49fb-b028-a00701f13197/WindowsXP-KB953356-x86-ENU.exe'))
        .toEqual('http://www.download.windowsupdate.com/msdownload/update/software/crup/2008/05/windowsxp-kb953356-x86-enu_cc2acdd2ef74cbf90896322a2c3d52c8bf908e0c.exe')
  });
});
