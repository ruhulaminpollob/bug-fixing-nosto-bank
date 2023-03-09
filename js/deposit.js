// DRY ---> Do Not Repeat Yourself

function setValue(locationId, value){
  const setLocation=document.getElementById(locationId);
  setLocation.innerText=value;
}


document.getElementById("btn-deposit").addEventListener("click", function (){
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount =document.getElementById("deposit-field").value;
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = document.getElementById("deposit-total").innerText;

  // calculate new deposit total
  const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
  
  // set deposit total value
  setValue("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal =document.getElementById("balance-total").innerText;

  const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
  setValue("balance-total", newBalanceTotal);
  
});

