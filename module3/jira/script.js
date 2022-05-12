let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont")
let allPriorityColors = document.querySelectorAll(".priority-color");
let removeBtn = document.querySelector(".remove-btn");
let addModal = true;
let removeFlag = false;
let modalPriorityColor = 'black';

addBtn.addEventListener("click",function(){
    if(addModal){
        //show modal
        modalCont.style.display = "flex";
    }else{
        //hide modal
        modalCont.style.display = "none";
    }
    addModal = !addModal;
})

for(let i=0;i<allPriorityColors.length;i++){
    let priorityDivOneColor = allPriorityColors[i];
    priorityDivOneColor.addEventListener("click",function(){        
        for(let j=0;j<allPriorityColors.length;j++){
            allPriorityColors[j].classList.remove("active");
        }
        priorityDivOneColor.classList.add("active");
        modalPriorityColor = priorityDivOneColor.classList[0];
    })
}

modalCont.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == 'Enter'){
        createTicket(modalPriorityColor, taskAreaCont.value);
        taskAreaCont.value = "";
        modalCont.style.display = "none";
        addModal = !addModal;
    }
})

removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color = 'black'
    }else{
        removeBtn.style.color = "red"
    }
    removeFlag = !removeFlag;
})



function createTicket(ticketColor,task){
    // <div class="ticket-cont">
    //         <div class="ticket-color"></div>
    //         <div class="ticket-id">#qzu03</div>
    //         <div class="task-area">some task</div>
    //     </div>
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
                            <div class="ticket-id">#qzu03</div>
                            <div class="task-area">${task}</div>`
    mainCont.appendChild(ticketCont);

    //handling delete 
    ticketCont.addEventListener("click",function(){
        if(removeFlag)
            ticketCont.remove();
    })
}