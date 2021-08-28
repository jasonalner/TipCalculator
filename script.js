const bill = document.getElementById('bill-input')
const tipBtns = document.querySelectorAll('.tip')
const tipCustom = document.getElementById('custom-pc')
const people = document.getElementById('people-input')
const errorMsg = document.querySelector('.error-msg')

// Event Listeners 

bill.addEventListener('input', setBillValue);
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick)
});
tipCustom.addEventListener('input', setTipCustomValue)
people.addEventListener('input', setPeopleValue)

//default values

let billValue = 0.0; 
let tipValue = 0.15;
let peopleValue = 1;


//functions

function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function validateInt(s) {
    var rgx = /^[0-9]*$/;
    return s.match(rgx)
}

function setBillValue() {
    if(bill.value.includes(',')){
        bill.value = bill.value.replace(',', '.');
    }

    if(!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.length-1);
    }

    billValue = parseFloat(bill.value);
    console.log(billValue);
}

function handleClick(event) {
    tipBtns.forEach(btn => {
        //remove active class
        btn.classList.remove('btn-active')

        //set active class
        if(event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('btn-active')
            tipValue = parseFloat(btn.innerHTML)/100;
        }
    })

    tipCustom.value = '';
    console.log(tipValue)
}

function setTipCustomValue() {
    if (!validateInt(tipCustom.value)) {
        tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length-1)
    }
    tipValue = parseFloat(tipCustom.value/100)
    console.log(tipValue)
tipBtns.forEach(btn => {
    btn.classList.remove('btn-active')
})
}

function setPeopleValue() {
    if (!validateInt(people.value)) {
        people.value = tipCustom.value.substring(0, people.value.length-1)
    }

    peopleValue = parseFloat(people.value)

    if(peopleValue <= 0 ) {
        errorMsg.classList.add('show-error-msg')
        setTimeout(function() {
            errorMsg.classList.remove('show-error-msg');
        }, 3000);
    }
}

/*

let bill = '';

const plusTenPercent = (bill) => {
    return bill + (bill*0.1)
}

const plusFifteenPercent = (bill) => {
    let tipAmount = (bill*0.15)
    return bill + tipAmount
}

const plusTwentyFivePercent = (bill) => {
    let tipAmount = (bill*0.25);
    return bill + tipAmount;
}

console.log(plusTenPercent(200))
console.log(plusFifteenPercent(200))
console.log(plusTwentyFivePercent(150.12))
*/
