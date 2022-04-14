const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({ path: 'example.png' });

//   await browser.close();
// })();

let browserPromise = puppeteer.launch({ headless: false });

browserPromise.then(function(browserInstance){
    console.log("Browser is opened");
})