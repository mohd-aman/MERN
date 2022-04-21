const puppeteer = require("puppeteer");
const mail = "gavic76183@carsik.com";
const pass = "abcdef";
const code = require('./code');

(async function(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
    let page = await browser.newPage();
    await page.goto('https://www.hackerrank.com/');
    await waitAndClick('ul.menu a',page);
    await page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    await page.evaluate(function(){
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btns[1].click();
        return;
    });
    await page.waitForSelector("#input-1");
    await page.type("#input-1",mail,{ delay: 100 });
    await page.type("#input-2",pass,{delay:100});
    await waitAndClick('button[data-analytics="LoginPassword"]',page);
    await waitAndClick('[data-automation="algorithms"]',page);
    await page.waitForSelector(".filter-group");
    await page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    });
    await page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
    let questionsArr = await page.evaluate(function(){
        let arr = [];
        let aTags = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
        for(let i=0;i<aTags.length;i++){
            let link =  aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
})();


async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function questionSolver(){
    
}