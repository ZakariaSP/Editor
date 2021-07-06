let text= document.getElementById("text");
let Run= document.getElementById("Run");
let Delet= document.getElementById("Delet");
let result= document.getElementById("result");

Run.onclick = ()=>{
    result.innerHTML = text.value;
    localStorage.setItem("Result", text.value)
}
Delet.addEventListener("click", ()=>{
    result.innerHTML = ""; 
    text.value="";
})
onload = ()=>{
    text.value = localStorage.getItem("Result");
}