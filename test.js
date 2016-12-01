var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
console.log('testing this right now');
console.log('remoteoptions',driver);
webdriverio.url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .quit();

