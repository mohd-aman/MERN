let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let addModal = true;

addBtn.addEventListener("click",function(){
    if(addModal){
        //show modal
        modal.style.display = "flex";
    }else{
        //hide modal
        modal.style.display = "none";
    }
    addModal = !addModal;
})