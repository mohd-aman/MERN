let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont")
let allPriorityColors = document.querySelectorAll(".priority-color");
let removeBtn = document.querySelector(".remove-btn");
let toolBoxColors = document.querySelectorAll(".color");
let addModal = true;
let removeFlag = false;
let colors = ['lightpink', 'blue', 'green', 'black']
let modalPriorityColor = colors[colors.length - 1];
var uid = new ShortUniqueId();

let ticketArr = [];



for (let i = 0; i < toolBoxColors.length; i++) {
    toolBoxColors[i].addEventListener("click", function () {
        let currentColor = toolBoxColors[i].classList[1];
        let filteredArr = [];
        for (let i = 0; i < ticketArr.length; i++) {
            if (ticketArr[i].color == currentColor) {
                filteredArr.push(ticketArr[i]);
            }
        }
        // console.log(filteredArr);
        let allTickets = document.querySelectorAll(".ticket-cont");
        for (let j = 0; j < allTickets.length; j++) {
            allTickets[j].remove();
        }
        for (let i = 0; i < filteredArr.length; i++) {
            let ticket = filteredArr[i];
            let color = ticket.color;
            let task = ticket.task;
            let id = ticket.id;
            createTicket(color, task, id)
        }
    })

    toolBoxColors[i].addEventListener("dblclick",function(){
        let allTickets = document.querySelectorAll(".ticket-cont");
        for (let j = 0; j < allTickets.length; j++) {
            allTickets[j].remove();
        }
        for (let i = 0; i < ticketArr.length; i++) {
            let ticket = ticketArr[i];
            let color = ticket.color;
            let task = ticket.task;
            let id = ticket.id;
            createTicket(color, task, id)
        }
    })
}



addBtn.addEventListener("click", function () {
    if (addModal) {
        //show modal
        modalCont.style.display = "flex";
    } else {
        //hide modal
        modalCont.style.display = "none";
    }
    addModal = !addModal;
})

for (let i = 0; i < allPriorityColors.length; i++) {
    let priorityDivOneColor = allPriorityColors[i];
    priorityDivOneColor.addEventListener("click", function (e) {
        for (let j = 0; j < allPriorityColors.length; j++) {
            allPriorityColors[j].classList.remove("active");
        }
        priorityDivOneColor.classList.add("active");
        modalPriorityColor = priorityDivOneColor.classList[0];
    })
}

modalCont.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key == 'Enter') {
        createTicket(modalPriorityColor, taskAreaCont.value);
        taskAreaCont.value = "";
        modalCont.style.display = "none";
        addModal = !addModal;
    }
})

removeBtn.addEventListener("click", function () {
    if (removeFlag) {
        removeBtn.style.color = 'black'
    } else {
        removeBtn.style.color = "red"
    }
    removeFlag = !removeFlag;
})



function createTicket(ticketColor, task, ticketId) {
    let id;
    if (ticketId == undefined) {
        id = uid();
    } else {
        id = ticketId;
    }

    // <div class="ticket-cont">
    //         <div class="ticket-color"></div>
    //         <div class="ticket-id">#qzu03</div>
    //         <div class="task-area">some task</div>
    //     </div>
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class', 'ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
                            <div class="ticket-id"> #${id}</div>
                            <div class="task-area">${task}</div>
                            <div class="lock-unlock"><i class="fa fa-lock"></i></div>`
    mainCont.appendChild(ticketCont);

    //lock unlock handle
    let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
    let ticketTaskArea = ticketCont.querySelector(".task-area");
    lockUnlockBtn.addEventListener("click", function () {
        if (lockUnlockBtn.classList.contains("fa-lock")) {
            lockUnlockBtn.classList.remove("fa-lock");
            lockUnlockBtn.classList.add("fa-unlock");
            ticketTaskArea.setAttribute("contenteditable", "true");
        } else {
            lockUnlockBtn.classList.remove("fa-unlock");
            lockUnlockBtn.classList.add("fa-lock");
            ticketTaskArea.setAttribute("contenteditable", "false");
        }
    })

    //handling delete 
    ticketCont.addEventListener("click", function () {
        if (removeFlag)
            ticketCont.remove();
    })

    //handle color
    let ticketColorBand = ticketCont.querySelector(".ticket-color");
    ticketColorBand.addEventListener("click", function () {
        //update UI
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx = -1;
        for (let i = 0; i < colors.length; i++) {
            if (currentTicketColor == colors[i]) {
                currentTicketColorIdx = i;
                break;
            }
        }
        let nextColorIdx = (currentTicketColorIdx + 1) % colors.length;
        let nextColor = colors[nextColorIdx];
        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(nextColor);
        
        //update ticketArr as well
        let ticketIdx;
        for(let i=0;i<ticketArr.length;i++){
            if(ticketArr[i].id==id){
                ticketIdx = i;
                break;
            }
        }
        ticketArr[ticketIdx].color = nextColor;
   
    })

    if(ticketId == undefined)
        ticketArr.push({ "color": ticketColor, "task": task, "id": id })
}