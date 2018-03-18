'use strict';

module.exports = function(defaultUserAgent) {
  var osPatterns = {
    'Android': 'android',
    'iPhone': 'iphone',
    'iPad': 'ipad',
    'Macintosh': 'mac',
    'Windows': 'windows',
    'Linux': 'linux',
    'Open BSD': 'open-bsd',
    'Sun OS': 'sun-os',
    'QNX': 'qnx',
    'BeOS': 'beos',
    'OS/2': 'os-2'
  };

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
  var browserPatterns = {
    'firefox': {
      dos: ['Firefox'],
      donts: ['Seamonkey']
    },
    'seamonkey': {
      dos: ['Seamonkey']
    },
    'chrome': {
      dos: ['Chrome'],
      donts: ['Chromium']
    },
    'chromium': {
      dos: ['Chromium']
    },
    'safari': {
      dos: ['Safari'],
      donts: ['Chrome', 'Chromium']
    },
    'opera': {
      dos: ['OPR', 'Opera']
    },
    'ie': {
      dos: ['MSIE']
    }
  };

  /* Singleton instances */
  var userAgent = null;
  var os = null;
  var browser = null;
  var device = null;

  /* User agent */

  function getWindowUserAgent() {
    if (typeof window !== 'undefined') {
      return window.navigator.userAgent;
    }

    if (typeof global !== 'undefined') {
      return global && global.navigator ? global.navigator.userAgent : '';
    }

    return '';
  }

  function getUserAgent() {
    if (!userAgent) {
      userAgent = defaultUserAgent || getWindowUserAgent();
    }

    return userAgent;
  }

  function strContains(str, needle) {
    return str.indexOf(needle) !== -1;
  }

  /* Operating System */

  function matchOS() {
    var userAgent = getUserAgent();

    for (var pattern in osPatterns) {
      if (strContains(userAgent, pattern)) {
        return osPatterns[pattern];
      }
    }

    return undefined;
  }

  function getOS() {
    if (!os) {
      os = matchOS();
    }

    return os;
  }

  function isMac() {
    return getOS() === 'mac';
  }

  function isWindows() {
    return getOS() === 'windows';
  }

  function isLinux() {
    return getOS() === 'linux';
  }

  function isAndroid() {
    return getOS() === 'android';
  }

  function isIphone() {
    return getOS() === 'iphone';
  }

  function isIpad() {
    return getOS() === 'ipad';
  }

  function isIOS() {
    return isIphone() || isIpad();
  }

  /* Browser */

  function matchBrowser() {
    var data, dos, donts;

    for (var browser in browserPatterns) {
      data = browserPatterns[browser];
      dos = data.dos || [];
      donts = data.donts || [];

      if (checkBrowserDos(dos, true) && checkBrowserDos(donts, false)) {
        return browser;
      }
    }

    return undefined;
  }

  function checkBrowserDos(dos, contain) {
    var userAgent = getUserAgent();
    var length = dos.length;

    for (var i = 0; i < length; i++) {
      if (strContains(userAgent, dos[i]) !== contain) {
        return false;
      }
    }

    return true;
  }

  function getBrowser() {
    if (!browser) {
      browser = matchBrowser();
    }

    return browser;
  }

  function isFirefox() {
    return getBrowser() === 'firefox';
  }

  function isSeamonkey() {
    return getBrowser() === 'seamonkey';
  }

  function isChrome() {
    return getBrowser() === 'chrome';
  }

  function isChromium() {
    return getBrowser() === 'chromium';
  }

  function isSafari() {
    return getBrowser() === 'safari';
  }

  function isOpera() {
    return getBrowser() === 'opera';
  }

  function isIE() {
    return getBrowser() === 'ie';
  }

  /* Device */

  function matchDevice() {
    return strContains(getUserAgent(), 'Mobi') ? 'mobile' : 'desktop';
  }

  function getDevice() {
    if (!device) {
      device = matchDevice();
    }

    return device;
  }

  function isMobile() {
    return getDevice() === 'mobile';
  }

  function isDesktop() {
    return getDevice() === 'desktop';
  }

  return {
    getOS: getOS,
    getBrowser: getBrowser,
    getDevice: getDevice,
    isMac: isMac,
    isWindows: isWindows,
    isLinux: isLinux,
    isAndroid: isAndroid,
    isIphone: isIphone,
    isIpad: isIpad,
    isIOS: isIOS,
    isFirefox: isFirefox,
    isSeamonkey: isSeamonkey,
    isChrome: isChrome,
    isChromium: isChromium,
    isSafari: isSafari,
    isOpera: isOpera,
    isIE: isIE,
    isMobile: isMobile,
    isDesktop: isDesktop
  };
};
