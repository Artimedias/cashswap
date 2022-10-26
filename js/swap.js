export default class Swap {   
    static exchange(money1, money2) {
      return new Promise(function (resolve, reject){
        let request = new XMLHttpRequest();
        console.log("reached!");
        const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${money1}/${money2}`;
        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          }else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }
    
  }