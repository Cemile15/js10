let input = document.createElement("input");
input.type = "text";
input.id = "textInput";

let closeBtn = document.createElement("button");
closeBtn.id = "closeBtn";
closeBtn.textContent = "Close Input";
closeBtn.addEventListener("click",()=>{
    closeBtn.disabled=true;
    openBtn.disabled=false;
    input.disabled=true;
})
let openBtn = document.createElement("button");
openBtn.id = "openBtn";
openBtn.textContent = "Open Input";
openBtn.disabled=true;
openBtn.addEventListener("click",()=>{
    closeBtn.disabled=false;
    openBtn.disabled=true;
    input.disabled=false;
})
document.body.appendChild(input);
document.body.appendChild(closeBtn);
document.body.appendChild(openBtn);
