var inputText=document.querySelector('#input-text');
var buttonRed=document.querySelector('#red');
var outputDiv=document.querySelector('#output-div');

function captureText(){
    outputDiv.innerText=inputText.value
}

function changeRed(){
    captureText()
    outputDiv.style.color="red";
}


buttonRed.addEventListener('click',changeRed)