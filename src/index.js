import './css/styles.css';
import Swap from "./js/swap.js";

window.addEventListener("load", start);

function start()
{
  let swapbutton = document.getElementById("mainBtn");
  let helpbutton = document.getElementById("codes");

  swapbutton.addEventListener("click", mainswap);
  helpbutton.addEventListener("click", toggle);
}

function mainswap() {
  let money1 = document.getElementById("moneyOne");
  let money2 = document.getElementById("moneyTwo");
  let money3 = document.getElementById("moneyAmount");

  let promise = Swap.exchange(money1, money2);
  let output;

  promise.then(function(response) {
    if (response.result==="success") {
      const apiResult = JSON.parse(response);
      output = ("The exchange rate between" + money1 + " and " + money2 + " is " + `${apiResult.conversion_rate}%` + "\n" + money3 + " " + money1 + " is equal to " + (`${apiResult.conversion_rate}` * money3) + " " + money2);
      document.getElementById("showRate").innerHTML = (output);
    } else {
          
      output = (`There was an error processing your request: ${response}`);
      document.getElementById("showErrors").innerHTML = (output);
    }
  });
}

function toggle() {
  if(document.getElementById("helper").style.visibility  === "visible")
  {
    document.getElementById("helper").style.visibility  = "collapse";
        
  }else{
    document.getElementById("helper").style.visibility  = "visible";
  }
}


