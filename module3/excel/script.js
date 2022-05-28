let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");

cellsContentDiv.addEventListener("scroll",function(e){
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromTop+"px";
    leftCol.style.left = scrollFromLeft+"px";
    topLeftCell.style.top = scrollFromTop+"px";
    topLeftCell.style.left = scrollFromLeft+"px";
})