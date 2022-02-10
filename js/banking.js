// Bank JS
// handle deposite button event

document.getElementById('deposite-button').addEventListener('click',function(){
    const depositeInput = document.getElementById('deposite-input').value;
    console.log(depositeInput);

    const depositeAmount = document.getElementById('deposit-total');
    depositeAmount.innerText = depositeInput;
    //clear the deposite input field
    depositeInput.value = "";
})