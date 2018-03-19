# browserme
Browser detection library to manage browser's user agent. It detects Operating System, browser and device type (desktop or mobile).

1. Install 

```
npm install browserme
```

2. Usage

```
var browserme = require('browserme');

browserme.browser.isChrome();
browserme.browser.isFirefox();
browserme.device.isMobile();
browserme.device.isDesktop();
browserme.os.isWindows();
browserme.os.isIOS();

var os = browserme.os.getOS();
var browser = browserme.browser.getBrowser();
var device = browserme.device.getDevice();
```

3. Run tests

```
npm test
```

4. List of methods

* os.getOS: returns OS
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
* browser.getBrowser: returns browser
  - 'firefox'
  - 'seamonkey'
  - 'chrome'
  - 'chromium'
  - 'safari'
  - 'opera'
  - 'ie'
* device.getDevice: return device type
  - 'desktop'
  - 'mobile'
* os.isMac: returns true if OS is Mac
* os.isWindows: returns true if OS is Windows
* os.isLinux: returns true if OS is Linux
* os.isAndroid: returns true if OS is Android
* os.isIphone: returns true if OS is iOS (iPhone)
* os.isIpad: returns true if OS is iOS (iPad)
* os.isIOS: returns true if OS is iOS (iPhone or iPad)
* browser.isFirefox: returns true if browser is Firefox
* browser.isSeamonkey: returns true if browser is SeaMonkey
* browser.isChrome: returns true if browser is Chrome
* browser.isChromium: returns true if browser is Chromium
* browser.isSafari: returns true if browser is Safari
* browser.isOpera: returns true if browser is Opera
* browser.isIE: returns true if browser is Internet Explorer
* device.isMobile: returns true if device is mobile
* device.isDesktop: returns true if device is desktop
