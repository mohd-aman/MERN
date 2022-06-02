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
            if(selfCellObject){
                cellObject.children.push(selfCellObject.name);
                selfCellObject.parent.push(cellObject.name);
            }
                console.log(cellObject);
            formula = formula.replace(formulaComp,value);
        }
    }
    //formula -> 2 * 3 + 4 - 3
    let computedValue = eval(formula);
    return computedValue;
}

function updateChildren(cellObject){
    for(let i=0;i<cellObject.children.length;i++){
        let childName = cellObject.children[i];
        let {rowId,colId} = getRowIdColIdFromAddress(childName);
        let childCellObject = db[rowId][colId];
        let newValue = solveFormula(childCellObject.formula);
        //update UI
        let cellUI = document.querySelector(`div[rowid='${rowId}'][colid='${colId}']`);
        cellUI.textContent = newValue;
        //update db
        childCellObject.value = newValue;
        updateChildren(childCellObject);
    }
}

function removeFormula(cellObject){
    for(let i=0;i<cellObject.parent.length;i++){
        let parentName = cellObject.parent[i];
        let {rowId,colId} = getRowIdColIdFromAddress(parentName);
        let parentCellObject = db[rowId][colId];
        let updatedChildren = parentCellObject.children.filter(function(child){
            return child!=cellObject.name;
        })
        parentCellObject.children = updatedChildren;
    }
    cellObject.parent = [];
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