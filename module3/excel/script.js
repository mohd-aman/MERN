let cellsContent = document.querySelector(".cells-content");


function initCells(){
    let cell = "";
    for(let i=0;i<100;i++){
        cell+="<div class = 'row'>";
        //column
        for(let j=0;j<26;j++){
            cell+="<div class = 'cell'>CELL</div>"
        }
        cell+="</div>"
    }
    cellsContent.innerHTML = cell;
}

initCells();