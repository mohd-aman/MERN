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
        const document =  dom.window.document;
        let bowlersTable = document.querySelectorAll(".table.bowler");
        for(let i=0;i<bowlersTable.length;i++){
            let rows = bowlersTable[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    console.log("Name of Bowler ---> ",name,"     Wickets ---> ",wicket);
                }
            }
        }
    }
}