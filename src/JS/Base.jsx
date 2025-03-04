let bill = document.querySelector(".bill");
let numberPeople = document.querySelector(".numberPeople");
let btn = document.querySelectorAll("button");
let custom = document.querySelector(".custom");
let amount = document.querySelector(".amount");
let total = document.querySelector(".total");
let selectedTip = 0;

function Sum()
{
    let value = (Number(bill.value) * Number(selectedTip.replace('%', '')) / 100) + Number(bill.value);
    return (Number(value) / numberPeople.value).toFixed(2);
}

function tipAmount()
{
    return Math.floor((Number(bill.value) * Number(selectedTip.replace('%', '')) / 100) / numberPeople.value * 100) / 100;
}

btn.forEach(button => {
    button.addEventListener("click", (event) => {
        if (numberPeople.value > 0)
        {
            selectedTip = event.target.textContent;
            total.textContent = Sum();
            amount.textContent = tipAmount();
        }
        else
        {
            document.querySelector(".error").style.display = 'inline';
            numberPeople.style.borderColor = '#B48372';
        }
    });
});

document.addEventListener("click", () => {
    if (bill.value > 0 && numberPeople.value > 0)
    {
        total.textContent = Sum(bill, custom.value, numberPeople);
    }
})