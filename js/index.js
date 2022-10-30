import '../css/styles.css';
import Swap from "../js/swap.js";

window.addEventListener("load", start)

function start()
{
  let swapbutton = document.getElementById("mainBtn")

  swapbutton.addEventListener("click", mainswap);
}

function mainswap() {
  console.log("reached")
    let money1 = document.getElementById("moneyOne");
    let money2 = document.getElementById("moneyTwo");
    let money3 = document.getElementById("moneyAmount");

    let promise = Swap.exchange(money1, money2);
    let output;
    promise.then(function(response) {
        const body = JSON.parse(response);
        output = ("The exchange rate between" + money1 + " and " + money2 + " is " + `${body.conversion_rate}%` + "\n" + money3 + " " + money1 + " is equal to " + (`${body.conversion_rate}` * money3) + " " + money2);
        document.getElementById("showrate").innerHTML = (output);
      }, function(error) {
        //$('#showErrors').text(`There was an error processing your request: ${error}`);
      });
}

