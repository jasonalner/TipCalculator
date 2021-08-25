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
