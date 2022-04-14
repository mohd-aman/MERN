const puppeteer = require('puppeteer');

let browserPromise = puppeteer.launch({ headless: false });

browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(page){
    console.log("page is opened");
    let urlPromise = page.goto('https://www.google.com/');
    return urlPromise
}).then(function(){
    console.log("google is opened");
})