'use strict';

module.exports = function(defaultUserAgent) {
    var userAgent = defaultUserAgent || getWindowUserAgent();
    
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
        'OS/2': 'os-2',
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
    
    var os = matchOS();
    var browser = matchBrowser();
    var device = matchDevice();

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
        return userAgent;
    }
    
    function strContains(str, needle) {
        return str.indexOf(needle) !== -1;
    }
    
    function matchOS() {
        var userAgent = getUserAgent();
    
        for (var pattern in osPatterns) {
            if (strContains(userAgent, pattern)) {
                return osPatterns[pattern];
            }
        }
    
        return undefined;
    }
    
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
    
    function matchDevice() {
        return strContains(getUserAgent(), 'Mobi') ? 'mobile' : 'desktop';
    }

    function getOS() {
        return os;
    }

    function isMac() {
        return os === 'mac';
    }

    function isWindows() {
        return os === 'windows';
    }

    function isLinux() {
        return os === 'linux';
    }

    function isAndroid() {
        return os === 'android';
    }

    function isIphone() {
        return os === 'iphone';
    }

    function isIpad() {
        return os === 'ipad';
    }

    function isIOS() {
        return isIphone() || isIpad();
    }

    function getBrowser() {
        return browser;
    }

    function isFirefox() {
        return browser === 'firefox';
    }

    function isSeamonkey() {
        return browser === 'seamonkey';
    }

    function isChrome() {
        return browser === 'chrome';
    }

    function isChromium() {
        return browser === 'chromium';
    }

    function isSafari() {
        return browser === 'safari';
    }

    function isOpera() {
        return browser === 'opera';
    }

    function isIE() {
        return browser === 'ie';
    }

    function getDevice() {
        return device;
    }

    function isMobile() {
        return device === 'mobile';
    }

    function isDesktop() {
        return device === 'desktop';
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
