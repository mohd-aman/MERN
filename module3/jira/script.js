let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont")
let allPriorityColors = document.querySelectorAll(".priority-color");
let removeBtn = document.querySelector(".remove-btn");
let addModal = true;
let removeFlag = false;
let colors = ['lightpink','blue','green','black']
let modalPriorityColor = colors[colors.length-1];

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
    priorityDivOneColor.addEventListener("click",function(e){        
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
                            <div class="task-area">${task}</div>
                            <div class="lock-unlock"><i class="fa fa-lock"></i></div>`
    mainCont.appendChild(ticketCont);

    //lock unlock handle
    let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
    lockUnlockBtn.addEventListener("click",function(){
        if(lockUnlockBtn.classList.contains("fa-lock")){
            lockUnlockBtn.classList.remove("fa-lock");
            lockUnlockBtn.classList.add("fa-unlock");
        }else{
            lockUnlockBtn.classList.remove("fa-unlock");
            lockUnlockBtn.classList.add("fa-lock");
        }
    })

    //handling delete 
    ticketCont.addEventListener("click",function(){
        if(removeFlag)
            ticketCont.remove();
    })

    //handle color
    let ticketColorBand = ticketCont.querySelector(".ticket-color");
    ticketColorBand.addEventListener("click",function(){
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx = -1;
        for(let i=0;i<colors.length;i++){
            if(currentTicketColor == colors[i]){
                currentTicketColorIdx = i;
                break;
            }
        }
        let nextColorIdx = (currentTicketColorIdx+1)%colors.length;
        let nextColor = colors[nextColorIdx];
        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(nextColor);
    })
}