# browserme
Browser detection library to manage browser's user agent. It detects Operating System, browser and device type (desktop or mobile).

1. Install 

```
npm install browserme
```

2. Usage

```
var browserme = require('browserme');

// You can set a user-agent string manually
var bm = browserme('Mozilla/5.0 (Android; Mobile; rv:38.0) Gecko/38.0 Firefox/38.0');
// Or leave it empty to get browser's user agent
var bm = browserme();

bm.isChrome();
bm.isFirefox();
bm.isMobile();
bm.isDesktop();
bm.isWindows();
bm.isIOS();

var os = bm.getOS();
var browser = bm.getBrowser();
var device = bm.getDevice();
```

3. Run tests

```
npm test
```

4. List of methods


* getOS: returns OS
    - 'android'
    - 'iphone'
    - 'ipad'
    - 'mac'
    - 'windows'
    - 'linux'
    - 'open-bsd'
    - 'sun-os'
    - 'qnx'
    - 'beos'
    - 'os-2'
* getBrowser: returns browser
   - 'firefox'
   - 'seamonkey'
   - 'chrome'
   - 'chromium'
   - 'safari'
   - 'opera'
   - 'ie'
* getDevice: return device type
   - 'desktop'
   - 'mobile'
* isMac: returns true if OS is Mac
* isWindows: returns true if OS is Windows
* isLinux: returns true if OS is Linux
* isAndroid: returns true if OS is Android
* isIphone: returns true if OS is iOS (iPhone)
* isIpad: returns true if OS is iOS (iPad)
* isIOS: returns true if OS is iOS (iPhone or iPad)
* isFirefox: returns true if browser is Firefox
* isSeamonkey: returns true if browser is SeaMonkey
* isChrome: returns true if browser is Chrome
* isChromium: returns true if browser is Chromium
* isSafari: returns true if browser is Safari
* isOpera: returns true if browser is Opera
* isIE: returns true if browser is Internet Explorer
* isMobile: returns true if device is mobile
* isDesktop: returns true if device is desktop
