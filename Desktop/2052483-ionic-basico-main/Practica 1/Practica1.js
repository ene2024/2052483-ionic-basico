const printBt = document.getElementById("print");
const clearBt = document.getElementById("delete");
const colorBt = document.getElementById("changeColor");

function printLine() {
    var inputValue = document.getElementById('input').value;
    console.log(inputValue);
}

function clearTextBox() {
    document.getElementById('input').value = '';
}

function changeColor(){
    let colors = ["red", "blue", "yellow", "green", "orange", "violet"];
    let c = Math.floor(Math.random() * 6);

    document.body.style.backgroundColor = colors[c];

}


printBt.addEventListener('click', printLine);
clearBt.addEventListener('click', clearTextBox);
colorBt.addEventListener('click', changeColor);