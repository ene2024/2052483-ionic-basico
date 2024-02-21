var articles = [];
var totalPrice = 0;

const guardarButton = document.getElementById("guardarBt");
const itemId = document.getElementById("item");
const itemPrice = document.getElementById("price");
const list = document.getElementById("listElements");
const total = document.getElementById("total");

function print(){
    if(itemId.value === "" || itemPrice.value === ""){
        alert("Debe llenar todos los campos");
        return;
    }


    articles.push(itemId.value + ": $" + itemPrice.value);
    totalPrice += parseFloat(itemPrice.value);
    let listElement = document.createElement("ion-item");

    listElement.innerHTML = articles[articles.length -1];

    list.appendChild(listElement);

    itemId.value = "";
    itemPrice.value = "";

    total.innerHTML = "Total: $" + totalPrice;
    total.style.display = "flex";
}

guardarButton.addEventListener('click', print);