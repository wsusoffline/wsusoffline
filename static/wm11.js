// https://www.catalog.update.microsoft.com/Search.aspx?q=media%20player

const urls = [
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-enu_0581874009280c186f856f079594d1ccc7a851f4.exe',
    digest: 'BYGHQAkoDBhvhW8HlZTRzMeoUfQ=',
    architectures: 'X86',
    languages: 'en',
    longLanguages: 'English',
    fileName: 'wmp11-windowsxp-x86-enu_0581874009280c186f856f079594d1ccc7a851f4.exe',
    defaultFileNameLength: 106
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-de-de_421436944b0bb18a0e9c1a8e61cb91ad2abfab6a.exe',
    digest: 'QhQ2lEsLsYoOnBqOYcuRrSq/q2o=',
    architectures: 'X86',
    languages: 'de',
    longLanguages: 'German',
    fileName: 'wmp11-windowsxp-x86-de-de_421436944b0bb18a0e9c1a8e61cb91ad2abfab6a.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-zh-tw_2930d41471e924d06f4926cd7a0bbaee170bd26f.exe',
    digest: 'KTDUFHHpJNBvSSbNegu67hcL0m8=',
    architectures: 'X86',
    languages: 'zh-tw',
    longLanguages: 'Chinese (Traditional)',
    fileName: 'wmp11-windowsxp-x86-zh-tw_2930d41471e924d06f4926cd7a0bbaee170bd26f.exe',
    defaultFileNameLength: 111
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-nb-no_d0f85065375907a238ffcfbdf40162e2b8da24a8.exe',
    digest: '0PhQZTdZB6I4/8+99AFi4rjaJKg=',
    architectures: 'X86',
    languages: 'no',
    longLanguages: 'Norwegian',
    fileName: 'wmp11-windowsxp-x86-nb-no_d0f85065375907a238ffcfbdf40162e2b8da24a8.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-pt-pt_a41c7d1ce9dee786c4abf9477f095b0ea9df6156.exe',
    digest: 'pBx9HOne54bEq/lHfwlbDqnfYVY=',
    architectures: 'X86',
    languages: 'pt',
    longLanguages: 'Portuguese (Portugal)',
    fileName: 'wmp11-windowsxp-x86-pt-pt_a41c7d1ce9dee786c4abf9477f095b0ea9df6156.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-fi-fi_2226655f6bf8565892f99d3d5e3754c0ccbc18fd.exe',
    digest: 'IiZlX2v4VliS+Z09XjdUwMy8GP0=',
    architectures: 'X86',
    languages: 'fi',
    longLanguages: 'Finnish',
    fileName: 'wmp11-windowsxp-x86-fi-fi_2226655f6bf8565892f99d3d5e3754c0ccbc18fd.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-he-il_1c97b36a39ab8aa2a8875be3ff4018091377cc0d.exe',
    digest: 'HJezajmriqKoh1vj/0AYCRN3zA0=',
    architectures: 'X86',
    languages: 'he',
    longLanguages: 'Hebrew',
    fileName: 'wmp11-windowsxp-x86-he-il_1c97b36a39ab8aa2a8875be3ff4018091377cc0d.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-pt-br_29a329f1decd58ba0ebc2cca85c08ebc75fcf4d9.exe',
    digest: 'KaMp8d7NWLoOvCzKhcCOvHX89Nk=',
    architectures: 'X86',
    languages: 'pt-br',
    longLanguages: 'Portuguese (Brazil)',
    fileName: 'wmp11-windowsxp-x86-pt-br_29a329f1decd58ba0ebc2cca85c08ebc75fcf4d9.exe',
    defaultFileNameLength: 111
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-fr-fr_614eef4c7563eea4e2097d4270666e5ea58dfeaf.exe',
    digest: 'YU7vTHVj7qTiCX1CcGZuXqWN/q8=',
    architectures: 'X86',
    languages: 'fr',
    longLanguages: 'French',
    fileName: 'wmp11-windowsxp-x86-fr-fr_614eef4c7563eea4e2097d4270666e5ea58dfeaf.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-es-es_b9a064fa90a59d843b748029871d260c45acd0bd.exe',
    digest: 'uaBk+pClnYQ7dIAphx0mDEWs0L0=',
    architectures: 'X86',
    languages: 'es',
    longLanguages: 'Spanish',
    fileName: 'wmp11-windowsxp-x86-es-es_b9a064fa90a59d843b748029871d260c45acd0bd.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-it-it_26d1be5a332530205c23028b32cc40fa4e02543f.exe',
    digest: 'JtG+WjMlMCBcIwKLMsxA+k4CVD8=',
    architectures: 'X86',
    languages: 'it',
    longLanguages: 'Italian',
    fileName: 'wmp11-windowsxp-x86-it-it_26d1be5a332530205c23028b32cc40fa4e02543f.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-tr-tr_f0c54c4e6c1172fdebcaf63f1736e6117224c52e.exe',
    digest: '8MVMTmwRcv3ryvY/FzbmEXIkxS4=',
    architectures: 'X86',
    languages: 'tr',
    longLanguages: 'Turkish',
    fileName: 'wmp11-windowsxp-x86-tr-tr_f0c54c4e6c1172fdebcaf63f1736e6117224c52e.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-pl-pl_e77883dc81fd30a170076b46b72ea131ea30a35b.exe',
    digest: '53iD3IH9MKFwB2tGty6hMeowo1s=',
    architectures: 'X86',
    languages: 'pl',
    longLanguages: 'Polish',
    fileName: 'wmp11-windowsxp-x86-pl-pl_e77883dc81fd30a170076b46b72ea131ea30a35b.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-nl-nl_7b08183ead913ef0c4b9c109b78d6eb27fd209a6.exe',
    digest: 'ewgYPq2RPvDEucEJt41usn/SCaY=',
    architectures: 'X86',
    languages: 'nl',
    longLanguages: 'Dutch',
    fileName: 'wmp11-windowsxp-x86-nl-nl_7b08183ead913ef0c4b9c109b78d6eb27fd209a6.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-ru-ru_16ee129b2743e4059bca02623a86a0a56772f957.exe',
    digest: 'Fu4SmydD5AWbygJiOoagpWdy+Vc=',
    architectures: 'X86',
    languages: 'ru',
    longLanguages: 'Russian',
    fileName: 'wmp11-windowsxp-x86-ru-ru_16ee129b2743e4059bca02623a86a0a56772f957.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-zh-cn_12bd089cfe7ef1889ea589d158e338b77ed10863.exe',
    digest: 'Er0InP5+8YiepYnRWOM4t37RCGM=',
    architectures: 'X86',
    languages: 'zh-cn',
    longLanguages: 'Chinese (Simplified)',
    fileName: 'wmp11-windowsxp-x86-zh-cn_12bd089cfe7ef1889ea589d158e338b77ed10863.exe',
    defaultFileNameLength: 111
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-cs-cz_b64301768a20e53e8ab92ea6ee34608e4321e7ca.exe',
    digest: 'tkMBdoog5T6KuS6m7jRgjkMh58o=',
    architectures: 'X86',
    languages: 'cs',
    longLanguages: 'Czech',
    fileName: 'wmp11-windowsxp-x86-cs-cz_b64301768a20e53e8ab92ea6ee34608e4321e7ca.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-ar-sa_8e93a0fa8b4c8b5c5357d5518f2e9b5516d9b1e1.exe',
    digest: 'jpOg+otMi1xTV9VRjy6bVRbZseE=',
    architectures: 'X86',
    languages: 'ar',
    longLanguages: 'Arabic',
    fileName: 'wmp11-windowsxp-x86-ar-sa_8e93a0fa8b4c8b5c5357d5518f2e9b5516d9b1e1.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-hu-hu_40e0a8065b33b9e8d6c6c21b4202642805fbdc32.exe',
    digest: 'QOCoBlszuejWxsIbQgJkKAX73DI=',
    architectures: 'X86',
    languages: 'hu',
    longLanguages: 'Hungarian',
    fileName: 'wmp11-windowsxp-x86-hu-hu_40e0a8065b33b9e8d6c6c21b4202642805fbdc32.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-ko-kr_c32eb133b72b810e60346b730b38d90350bdee9d.exe',
    digest: 'wy6xM7crgQ5gNGtzCzjZA1C97p0=',
    architectures: 'X86',
    languages: 'ko',
    longLanguages: 'Korean',
    fileName: 'wmp11-windowsxp-x86-ko-kr_c32eb133b72b810e60346b730b38d90350bdee9d.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-da-dk_eac60a19767790e10ca9f02e7a91240be7b4465c.exe',
    digest: '6sYKGXZ3kOEMqfAuepEkC+e0Rlw=',
    architectures: 'X86',
    languages: 'da',
    longLanguages: 'Danish',
    fileName: 'wmp11-windowsxp-x86-da-dk_eac60a19767790e10ca9f02e7a91240be7b4465c.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-ja-jp_73f549bfd11fc3fb59f2f31f0e640c1c7f931e07.exe',
    digest: 'c/VJv9Efw/tZ8vMfDmQMHH+THgc=',
    architectures: 'X86',
    languages: 'ja',
    longLanguages: 'Japanese',
    fileName: 'wmp11-windowsxp-x86-ja-jp_73f549bfd11fc3fb59f2f31f0e640c1c7f931e07.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-sv-se_5fab49a7f816ee76e8b9b5b05e936d450b122dc6.exe',
    digest: 'X6tJp/gW7nboubWwXpNtRQsSLcY=',
    architectures: 'X86',
    languages: 'sv',
    longLanguages: 'Swedish',
    fileName: 'wmp11-windowsxp-x86-sv-se_5fab49a7f816ee76e8b9b5b05e936d450b122dc6.exe',
    defaultFileNameLength: 108
  },
  {
    url: 'http://www.download.windowsupdate.com/msdownload/update/v3-19990518/cabpool/wmp11-windowsxp-x86-el-gr_c278ffe7cfbf582551f7d5ab76e3a7d9ea38d8c1.exe',
    digest: 'wnj/58+/WCVR99WrduOn2eo42ME=',
    architectures: 'X86',
    languages: 'el',
    longLanguages: 'Greek',
    fileName: 'wmp11-windowsxp-x86-el-gr_c278ffe7cfbf582551f7d5ab76e3a7d9ea38d8c1.exe',
    defaultFileNameLength: 108
  }
]


console.log(urls)