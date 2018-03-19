'use strict';

var expect = require('chai').expect;
var browserme = require('../index');

global.window = {
    navigator: {
      userAgent: undefined
    }
};

describe('browserme', function() {
    beforeEach(function() {
        browserme.clear();
    });

    it('Windows - Chrome', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36';

        expect(browserme.os.isWindows()).to.equal(true);
        expect(browserme.browser.isChrome()).to.equal(true);
        expect(browserme.device.isDesktop()).to.equal(true);
    });

    it('Windows - IE', function() {
        global.window.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)';

        expect(browserme.os.isWindows()).to.equal(true);
        expect(browserme.browser.isIE()).to.equal(true);
        expect(browserme.device.isDesktop()).to.equal(true);
    });

    it('Windows - Firefox', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0)';

        expect(browserme.os.isWindows()).to.equal(true);
        expect(browserme.browser.isFirefox()).to.equal(true);
        expect(browserme.device.isDesktop()).to.equal(true);
    });

    it('Android - Chrome', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19';

        expect(browserme.os.isAndroid()).to.equal(true);
        expect(browserme.browser.isChrome()).to.equal(true);
        expect(browserme.device.isMobile()).to.equal(true);
    });

    it('Android - Firefox', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (Android; Mobile; rv:38.0) Gecko/38.0 Firefox/38.0';

        expect(browserme.os.isAndroid()).to.equal(true);
        expect(browserme.browser.isFirefox()).to.equal(true);
        expect(browserme.device.isMobile()).to.equal(true);
    });

    it('iPhone - Safari', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';

        expect(browserme.os.isIphone()).to.equal(true);
        expect(browserme.os.isIOS()).to.equal(true);
        expect(browserme.browser.isSafari()).to.equal(true);
        expect(browserme.device.isMobile()).to.equal(true);
    });

    it('iPad - Safari', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1';

        expect(browserme.os.isIpad()).to.equal(true);
        expect(browserme.os.isIOS()).to.equal(true);
        expect(browserme.browser.isSafari()).to.equal(true);
        expect(browserme.device.isMobile()).to.equal(true);
    });

    it('Linux - Chrome', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36';

        expect(browserme.os.isLinux()).to.equal(true);
        expect(browserme.browser.isChrome()).to.equal(true);
        expect(browserme.device.isDesktop()).to.equal(true);
    });

    it('Linux - Firefox', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20150101 Firefox/47.0 (Chrome)';

        expect(browserme.os.isLinux()).to.equal(true);
        expect(browserme.browser.isFirefox()).to.equal(true);
        expect(browserme.device.isDesktop()).to.equal(true);
    });

    it('Linux - Chromium', function() {
        global.window.navigator.userAgent = 'Mozilla/5.0 (SMART-TV; X11; Linux armv7l) AppleWebKit/537.42 (KHTML, like Gecko) Chromium/25.0.1349.2 Chrome/25.0.1349.2 Safari/537.42';

        expect(browserme.os.isLinux()).to.equal(true);
        expect(browserme.browser.isChromium()).to.equal(true);
        expect(browserme.device.isDesktop()).to.equal(true);
    });
});