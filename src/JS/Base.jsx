let bill = document.querySelector(".bill");
let numberPeople = document.querySelector(".numberPeople");
let btn = document.querySelectorAll("button");
let custom = document.querySelector(".custom");
let amount = document.querySelector(".amount");
let total = document.querySelector(".total");
let selectedTip = 0;

function Sum() {
    let value = (Number(bill.value) * Number(selectedTip.replace('%', '')) / 100) + Number(bill.value);
    return (Number(value) / numberPeople.value).toFixed(2);
}

function tipAmount() {
    return Math.floor((Number(bill.value) * Number(selectedTip.replace('%', '')) / 100) / numberPeople.value * 100) / 100;
}

btn.forEach(button => {
    button.addEventListener("click", (event) => {
        if (numberPeople.value > 0) {
            selectedTip = event.target.textContent;  
            custom.value = '';  
            total.textContent = Sum();
            amount.textContent = tipAmount();
            document.querySelector(".error").style.display = 'none';
            numberPeople.style.borderColor = "";
        } else {
            document.querySelector(".error").style.display = 'inline';
            numberPeople.style.borderColor = '#B48372';
        }
    });
});

custom.addEventListener("input", () => {
    if (custom.value !== "") { 
        selectedTip = custom.value; 
        total.textContent = Sum(); 
        amount.textContent = tipAmount();
    }
});

document.querySelector(".reset").addEventListener("click", () => {
    bill.value = "";
    numberPeople.value = "";
    selectedTip = 0;  
    custom.value = "";  
    amount.textContent = "$0.00";
    total.textContent = "$0.00";
    document.querySelector(".error").style.display = 'none';
    numberPeople.style.borderColor = "";
});
