let money = 1000;
let alart = document.getElementById('section-alart');
let textAlart = document.getElementById('alart');
let cashBar = document.getElementById('money');
let cashBar2 = document.getElementById('money2');
let totalDisplay = document.getElementById('total');
let amount = document.getElementById('amount-cart');
let amountNum = 0;
let total = 0;
const buttons = document.querySelectorAll('.card-back button#cart');
const card = document.querySelectorAll('.card-font');
const cartSlots = document.querySelector('.slots-row');

alart.style.display = 'none';
totalDisplay.innerHTML ="Total " +  total + " $";
cashBar.innerHTML = money + "$";
cashBar2.innerHTML = money + "$";


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const cardName = card.getAttribute('data-value2');
        const cardMoney = parseInt(card.getAttribute('value'));
        
        const slot = document.createElement('div');
        slot.className = 'cart-slot';
        slot.textContent = `${cardName} - ฿${cardMoney}  `;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'delete';
        
        deleteButton.addEventListener('click', () => {
            cartSlots.removeChild(slot);
            amountNum -= 1;
            total -= cardMoney;
            totalDisplay.innerHTML ="Total " +  total + " $";
            if(amountNum <= 0){
                amount.style.display = 'none';
            }else{
                amount.style.display = 'flex';
                amount.innerHTML = amountNum;
            }
        });
        
        slot.appendChild(deleteButton);
        
        cartSlots.appendChild(slot);
        
        amountNum += 1;
        if (cartSlots.children.length >= 5) {
            amountNum = 5;
            alart.style.display = 'flex';
            textAlart.innerHTML = "Limited to a maximum of 5";
        }
        
        total += cardMoney;
        totalDisplay.innerHTML ="Total " + total + " $";
        if(amountNum <= 0){
            amount.style.display = 'none';
        }else{
            amount.style.display = 'flex';
            amount.innerHTML = amountNum;
        }
        
    });
});

function buy(){
    if(total == 0){
        alart.style.display = 'flex';
        textAlart.innerHTML = "Please select a card.";
    }else if(money >= total){
        amountNum = 0;
        money -= total;
        cashBar.innerHTML = money + " $";
        cashBar2.innerHTML = money + " $";
        total = 0;
        totalDisplay.innerHTML ="Total " +  total + " $";
        amount.style.display = 'none';
        
        while (cartSlots.firstChild) {
            cartSlots.removeChild(cartSlots.firstChild);
        }
        alart.style.display = 'flex';
        textAlart.innerHTML = "Payment completed";
    }
    else{
        alart.style.display = 'flex';
        textAlart.innerHTML = "Insufficient balance";
    }
}

function closeAlart(){
    alart.style.display = 'none';
}

function topUp(pay,get){
    alart.style.display = 'flex';
    textAlart.innerHTML = "You have purchased the " + pay + " baht pack.";
    money += get;
    cashBar.innerHTML = money + " $";
    cashBar2.innerHTML = money + " $";
}

let checkDetails = false;
function BTdetails(flieImg,name,money){
    if(checkDetails == false){
        document.getElementById('popup-card').style.display = 'flex';
        checkDetails = true;
    }else if(checkDetails == true){
        document.getElementById('popup-card').style.display = 'none';
        checkDetails = false;
    }
    document.getElementById('name-Card-popup').innerHTML = name;
    document.getElementById('money-Card-popup').innerHTML ='Price : '+ money+' $';
    let img = document.getElementById('img-card');
    let srcUse = `/Resource/card/${flieImg}.png`;
    img.src = srcUse;
}