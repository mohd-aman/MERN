const puppeteer = require("puppeteer");
const mail = "gavic76183@carsik.com";
const pass = "abcdef";

let browserPromise = puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
let page;
browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    console.log("Page is opened");
    page = pageInstance
    let urlPromise = page.goto('https://www.hackerrank.com/');
    return urlPromise;
}).then(function(){
    return waitAndClick('ul.menu a');
}).then(function(){
    let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    return waitPromise;
}).then(function(){
    let domClickPromse = page.evaluate(function(){
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btns[1].click();
        return;
    });
    return domClickPromse;
}).then(function(){
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function(){
    let mailTypedPromise = page.type("#input-1",mail,{ delay: 100 });
    return mailTypedPromise;
}).then(function(){
    let passTypedPromise = page.type("#input-2",pass,{delay:100});
    return passTypedPromise;
}).then(function(){
    let clickPromse = page.click('button[data-analytics="LoginPassword"]');
    return clickPromse;
}).then(function(){
    return waitAndClick('[data-automation="algorithms"]');
})
.then(function(){
    return page.waitForSelector(".filter-group");
}).then(function(){
    let domSelectPromise = page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function(){
    console.log("warmup Selected");
    return page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
}).then(function(){
    let arrPromise = page.evaluate(function(){
        let arr = [];
        let aTags = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
        for(let i=0;i<aTags.length;i++){
            let link =  aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    return arrPromise;
}).then(function(questionsArr){
    console.log(questionsArr);
})



function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();
        });
    })
}