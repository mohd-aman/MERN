let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");

inputTag.addEventListener('keydown',function(e){
    // console.log(e);
    let key = e.key;
    if(key == 'Enter'){
        let value = inputTag.value;
        // console.log(value);
        inputTag.value = "";
        let liTag = document.createElement("li");
        liTag.innerText = value;
        ulTag.appendChild(liTag);
    }
})