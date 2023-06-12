function plusBtn(inputField) {
    const inputBox = document.getElementById(inputField);
    const stringInputBoxValue = inputBox.value;
    const numberInputBoxValue = parseInt(stringInputBoxValue);
    const newValue = numberInputBoxValue + 1;
    inputBox.value = newValue;
    return inputBox;
};

function minusBtn(inputId) {
    const inputField = document.getElementById(inputId);
    const stringInputField = inputField.value;
    const numberInputField = parseInt(stringInputField);
    const newNumber = numberInputField - 1;
    inputField.value = newNumber;
};

function totalPrice(totalPriceId, inputBoxId) {
    const totalPricePlus = document.getElementById(totalPriceId);
    const inputPlusBox = document.getElementById(inputBoxId);
    const stringBoxValue = inputPlusBox.value;
    const numberBoxValue = parseInt(stringBoxValue);

    const newTotalPrice = numberBoxValue * 1219;
    totalPricePlus.innerText = newTotalPrice;
}

function caseTotalPrice(caseTotalPriceId, caseInputBoxId) {
    const caseTotalPrice = document.getElementById(caseTotalPriceId);
    const caseInputBox = document.getElementById(caseInputBoxId);
    const stringNumber = caseInputBox.value;
    const numberBoxValue = parseInt(stringNumber);

    const newTotalPrice = numberBoxValue * 59;
    caseTotalPrice.innerText = newTotalPrice;
}

function plusSubTotal(iphoneTotalPice, caseTotalPrice) {
    const subTotal = document.getElementById('sub-total');
    
    const totalIphoneMoney = document.getElementById(iphoneTotalPice).innerText;
    const numberIphoneTotalMoney = parseInt(totalIphoneMoney);
    
    const caseTotalMoney = document.getElementById(caseTotalPrice).innerText;
    const numberCaseTotalMoney = parseInt(caseTotalMoney);

    const currentSubTotal = numberIphoneTotalMoney + numberCaseTotalMoney;

    const newSubTotal = currentSubTotal + 1278;
    subTotal.innerText = newSubTotal;

    const taxId = document.getElementById('tax');
    const taxAmmountString = (newSubTotal * 0.1).toFixed(2);
    const taxAmmount = parseFloat(taxAmmountString);
    taxId.innerText = taxAmmount;

    const finalAmmount = document.getElementById('final');
    const currentFinalMoney = newSubTotal + taxAmmount;
    finalAmmount.innerText = currentFinalMoney;

}

// function taxAndTotal(tax, final) {
//     const tax = document.getElementById('tax');
    
// }

