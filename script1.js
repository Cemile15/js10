let selectedDiv = document.createElement("div");
document.body.append(selectedDiv);
let input1 = document.createElement("input");
let label1 = document.createElement("label");
input1.type = "radio";
input1.id = "yasli";
input1.name = "age";
input1.value = "Yaşlılar üçün";
label1.innerHTML = "Yaşlılar üçün";

let input2 = document.createElement("input");
let label2 = document.createElement("label");
input2.type = "radio";
input2.id = "boyuk";
input2.name = "age";
input2.value = "Böyüklər üçün";
label2.innerHTML = "Böyüklər üçün";

let input3 = document.createElement("input");
let label3 = document.createElement("label");
input3.type = "radio";
input3.id = "kicik";
input3.name = "age";
input3.value = "Kiçiklər üçün";
label3.innerHTML = "Kiçiklər üçün";

let addButton = document.createElement("button");
addButton.innerHTML = "Add";

selectedDiv.append(label1,input1,label2, input2,label3,input3,addButton);


addButton.addEventListener("click",()=>{
    let radioc=document.querySelector('input[name="age"]:checked');
    console.log(radioc.value);
});



