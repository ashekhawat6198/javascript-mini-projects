const modal=document.querySelector(".modal");
const relay=document.querySelector(".relay");
function modalOpen(){
    modal.classList.add("model")
    relay.classList.add("model1");
}

function modalClose(){
    modal.classList.remove("model");
    relay.classList.remove("model1");
}