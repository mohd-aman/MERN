const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);


function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmen = document.querySelectorAll(".batsman-cell.text-truncate.out a");
        for(let i=0;i<batsmen.length;i++){
            let batsmanLink = batsmen[i].href;
            let completeBatsmanLink = "https://www.espncricinfo.com"+batsmanLink;
            // console.log(completeBatsmanLink);
            request(completeBatsmanLink,cb2);
        }
    }
}


function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerDetail = document.querySelector(".player-card-padding .player_overview-grid");
        let playerH5 = playerDetail.querySelectorAll("div h5");
        let fullName = playerH5[0].textContent;
        let DOB = playerH5[1].textContent;
        console.log("Full Name : ",fullName," Date of Birth : ",DOB);
    }
}