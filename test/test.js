'use strict';

var expect = require('chai').expect;
var browserme = require('../index');

describe('browserme', function() {
    it('Windows - Chrome', function() {
        var result = browserme('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36');

        expect(result.isWindows()).to.equal(true);
        expect(result.isChrome()).to.equal(true);
        expect(result.isDesktop()).to.equal(true);
    });

    it('Windows - IE', function() {
        var result = browserme('Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)');

        expect(result.isWindows()).to.equal(true);
        expect(result.isIE()).to.equal(true);
        expect(result.isDesktop()).to.equal(true);
    });

    it('Windows - Firefox', function() {
        var result = browserme('Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0)');

        expect(result.isWindows()).to.equal(true);
        expect(result.isFirefox()).to.equal(true);
        expect(result.isDesktop()).to.equal(true);
    });

    it('Android - Chrome', function() {
        var result = browserme('Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19');

        expect(result.isAndroid()).to.equal(true);
        expect(result.isChrome()).to.equal(true);
        expect(result.isMobile()).to.equal(true);
    });

    it('Android - Firefox', function() {
        var result = browserme('Mozilla/5.0 (Android; Mobile; rv:38.0) Gecko/38.0 Firefox/38.0');

        expect(result.isAndroid()).to.equal(true);
        expect(result.isFirefox()).to.equal(true);
        expect(result.isMobile()).to.equal(true);
    });

    it('iPhone - Safari', function() {
        var result = browserme('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

        expect(result.isIphone()).to.equal(true);
        expect(result.isIOS()).to.equal(true);
        expect(result.isSafari()).to.equal(true);
        expect(result.isMobile()).to.equal(true);
    });

    it('iPad - Safari', function() {
        var result = browserme('Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1');

        expect(result.isIpad()).to.equal(true);
        expect(result.isIOS()).to.equal(true);
        expect(result.isSafari()).to.equal(true);
        expect(result.isMobile()).to.equal(true);
    });

    it('Linux - Chrome', function() {
        var result = browserme('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36');

        expect(result.isLinux()).to.equal(true);
        expect(result.isChrome()).to.equal(true);
        expect(result.isDesktop()).to.equal(true);
    });

    it('Linux - Firefox', function() {
        var result = browserme('Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20150101 Firefox/47.0 (Chrome)');

        expect(result.isLinux()).to.equal(true);
        expect(result.isFirefox()).to.equal(true);
        expect(result.isDesktop()).to.equal(true);
    });

    it('Linux - Chromium', function() {
        var result = browserme('Mozilla/5.0 (SMART-TV; X11; Linux armv7l) AppleWebKit/537.42 (KHTML, like Gecko) Chromium/25.0.1349.2 Chrome/25.0.1349.2 Safari/537.42');

        expect(result.isLinux()).to.equal(true);
        expect(result.isChromium()).to.equal(true);
        expect(result.isDesktop()).to.equal(true);
    });
});