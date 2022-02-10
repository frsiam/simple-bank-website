// Bank JS
// handle deposite button event

document.getElementById('deposite-button').addEventListener('click',function(){
    // deposite total 
    const depositeInputText = document.getElementById('deposite-input').value;
    const depositeInput = parseFloat(depositeInputText);
    // console.log(depositeInput);

    const depositeAmount = document.getElementById('deposit-total');
    const previousAmountText = depositeAmount.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const newAmount = previousAmount + depositeInput;
    depositeAmount.innerText = newAmount;

    // update balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceAmount = parseFloat(balanceTotalText);

    const totalBalanceAmount = depositeInput + currentBalanceAmount;
    balanceTotal.innerText = totalBalanceAmount;


    //clear the deposite input field
    document.getElementById('deposite-input').value = "";
})