export default class Swap {   
  static exchange(money1, money2) {
    //let request = new XMLHttpRequest();
      
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${money1}/${money2}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })      
      .catch(function(error) {
        return error;
      });
  }
}