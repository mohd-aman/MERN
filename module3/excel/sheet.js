let addSheetBtn = document.querySelector(".add-sheet");
let sheetList = document.querySelector(".sheets-list")
let sheetId = 0;
let firstSheet = document.querySelector(".sheet");
sheetListener(firstSheet);

addSheetBtn.addEventListener("click",function(){
    sheetId++;
    let activeSheet = document.querySelector(".active-sheet");
    activeSheet.classList.remove("active-sheet");
    let sheetDiv = document.createElement("div");
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add("active-sheet");
    sheetDiv.setAttribute("sheetId",sheetId);
    sheetDiv.innerText = `Sheet ${sheetId+1}`;
    sheetList.append(sheetDiv);
    sheetListener(sheetDiv);
    initUi();
    initDb();
})

function sheetListener(sheet){
    sheet.addEventListener("click",function(){
        if(sheet.classList.contains("active-sheet")){
            return;
        }
        initUi();
        let activeSheet = document.querySelector(".active-sheet");
        activeSheet.classList.remove("active-sheet");
        sheet.classList.add("active-sheet");
        let sheetId = sheet.getAttribute("sheetId");
        // console.log(sheet);
        db = sheetsDB[sheetId].db;
        visitedCells = sheetsDB[sheetId].visitedCells;
        setUi();
    })
}

function setUi(){
    for(let i=0;i<visitedCells.length;i++){
        let {rowId,colId} = visitedCells[i];
        let cellObject = db[rowId][colId];
        let cell = document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`);
        cell.innerHTML = cellObject.value;
    }
}

function initUi(){
    for(let i=0;i<100;i++){
        for(let j=0;j<26;j++){
            let cell = document.querySelector(`div[rowid="${i}"][colid="${j}"]`);
            cell.innerHTML = "";
        }
    }
}