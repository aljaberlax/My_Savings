function getInputValue(item) {
    let itemInput = document.getElementById(item + '-input');

    let itemNumber = parseFloat(itemInput.value);

    return itemNumber;
}

function calculateTotal() {
    let foodInput = getInputValue('food');
    let rentInput = getInputValue('rent');
    let clothsInput = getInputValue('cloth');
    let expenseTotal = foodInput + rentInput + clothsInput;
    return expenseTotal;
    //    console.log(subTotal);
    // let tax = subTotal / 10;
    // let totalPrice = subTotal + tax;
    // document.getElementById('sub-total').innerText = subTotal;
    // document.getElementById('tax-amount').innerText = tax;
    // document.getElementById('totalPrice').innerText = totalPrice;

}

function save() {
    let saveInputValue = getInputValue('save');
    let savedBalance = expenseTotal / saveInputValue;
    document.getElementById('saving-amount').innerText = savedBalance;
    return savedBalance;
}
//clear input field
function ClearFields() {

    document.getElementById("income-input").value = "";
    document.getElementById("food-input").value = "";
    document.getElementById("rent-input").value = "";
    document.getElementById("cloth-input").value = "";
    document.getElementById("save-input").value = "";
    document.getElementById("total-expense").innerText = "00";
    document.getElementById("balance-total").innerText = "00";
    document.getElementById("saving-amount").innerText = "00";
    document.getElementById("remaining-balance").innerText = "00";
}
document.getElementById('calculate-btn').addEventListener('click', function() {
    let expenseTotal = calculateTotal();
    let expense = document.getElementById('total-expense');
    let previousExpenseText = expense.innerText
    let previousExpense = parseFloat(previousExpenseText);
    let totalExpense = previousExpense + expenseTotal;
    expense.innerText = totalExpense;
    let incomeInput = getInputValue('income');
    let totalBalance = incomeInput - totalExpense;
    let balanceInput = document.getElementById('balance-total');
    let balancetotal = parseFloat(balanceInput.innerText);
    let newBalance = totalBalance + balancetotal;
    balanceInput.innerText = newBalance;


})

document.getElementById('save-btn').addEventListener('click', function() {

    let saveInput = getInputValue('save');

    let incomeInput = getInputValue('income');
    let totalBalance = (saveInput / 100) * incomeInput;
    let savingAmount = document.getElementById('saving-amount');
    let nweSavingAmount = savingAmount.innerText
    let savesAmount = parseFloat(nweSavingAmount);
    let newSaveBalance = totalBalance + savesAmount;
    savingAmount.innerText = newSaveBalance;
    let remainBalance = document.getElementById('remaining-balance');
    let remainTotalBalance = parseFloat(remainBalance.innerText);
    let balance = document.getElementById('balance-total');
    let bltotal = balance.innerText;
    let newBalanceTotal = parseFloat(bltotal);
    let updateRemainingBalance = newBalanceTotal - newSaveBalance;
    remainBalance.innerText = updateRemainingBalance;

})