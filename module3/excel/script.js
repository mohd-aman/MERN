let cellsContentDiv = document.querySelector(".cells-content");


function initCells(){
    let cellsContent = "<div class='top-left-cell'></div>";
    //top-row
    cellsContent+="<div class='top-row'>"
    for(let i=0;i<26;i++){
        cellsContent+=`<div class='top-row-cell'>${String.fromCharCode(65+i)}</div>`;
    }
    cellsContent+="</div>"

    //left-col
    cellsContent+="<div class='left-col'>"
    for(let i=0;i<100;i++){
        cellsContent+=`<div class='left-col-cell'>${i+1}</div>`
    }
    cellsContent+="</div>"
    cellsContent+="<div class='cells'>"
    for(let i=0;i<100;i++){
        cellsContent+="<div class = 'row'>";
        //column
        for(let j=0;j<26;j++){
            cellsContent+="<div class = 'cell' contentEditable>CELL</div>"
        }
        cellsContent+="</div>"
    }
    cellsContent+="</div>"
    cellsContentDiv.innerHTML = cellsContent;
}

initCells();