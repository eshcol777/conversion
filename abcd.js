
const textbox = document.getElementById("textbox");
const tofar = document.getElementById("tofar");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result");
let temp;


function convert(){
    if(tofar.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5+32;
        result.textContent =temp + "℉";
    }
    else if(tocel.checked){
        temp = Number(textbox.value);
        temp = (temp -32)* (5/9);
        result.textContent =temp + "℃";

    }else{
        result.textContent = "Select a Unit";
    }
}