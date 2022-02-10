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
});

//handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    //set withdraw total
    const withdrawBalance = document.getElementById('withdraw');
    const withdrawText = withdrawBalance.innerText;
    const currentWithdrawAmount = parseFloat(withdrawText);

    const newTotalWithdraw = withdrawInputAmount + currentWithdrawAmount;

    withdrawBalance.innerText = newTotalWithdraw;
    
    //update balance
    const presentBalance = document.getElementById('total-balance');
    const presentBalanceText = presentBalance.innerText;
    const presentBalanceAmount = parseFloat(presentBalanceText);

    const totalBalanceAmount = presentBalanceAmount - withdrawInputAmount;

    presentBalance.innerText = totalBalanceAmount;

    // clear the wihtdraw input field
    withdrawInput.value = "";
})