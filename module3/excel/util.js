function solveFormula(formula,selfCellObject){
    //formula = (A1 + B2 + 2 - C3)
    let formulaComps = formula.split(" ");
    //formulaComps = [A1,+,B2,+,2,-,C3];
    for(let i=0;i<formulaComps.length;i++){
        let formulaComp = formulaComps[i];
        if(formulaComp[0]>="A" && formulaComp[0]<="Z"){
            let {rowId,colId} = getRowIdColIdFromAddress(formulaComp);
            let cellObject = db[rowId][colId];
            let value = cellObject.value;
            cellObject.children.push(selfCellObject.name);
            console.log(cellObject);
            formula = formula.replace(formulaComp,value);
        }
    }
    //formula -> 2 * 3 + 4 - 3
    let computedValue = eval(formula);
    return computedValue;
}


function getRowIdColIdFromElement(element){
    let rowId  = element.getAttribute("rowid");
    let colId = element.getAttribute("colid");
    return {
        rowId,
        colId
    }
}

function getRowIdColIdFromAddress(address){
    //address = A1, B2
    let colId = address.charCodeAt(0)-65;
    let rowId = Number(address.substring(1))-1;
    return {
        rowId,
        colId
    }
}