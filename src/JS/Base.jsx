//145 + 15% / numberofpeoaple;

let bill = document.querySelector(".bill");
let numberPeople = document.querySelector(".numberPeople");
let btn = document.querySelectorAll("button");
let total = document.querySelector(".total"); // Definição do total
let selectedTip = 0;

function Sum(bill, selectedTip, numberPeople)
{
    let value = (Number(bill.value) * Number(selectedTip.replace('%', '')) / 100) + Number(bill.value);
    return (Number(value) / numberPeople.value).toFixed(2);
}

btn.forEach(button => {
    button.addEventListener("click", (event) => {
        if (numberPeople.value > 0)
        {
            selectedTip = event.target.textContent;
            total.textContent = Sum(bill, selectedTip, numberPeople);
        }
        else
        {
            document.querySelector(".error").style.display = 'inline';
            numberPeople.style.borderColor = '#B48372';
        }
    });
});