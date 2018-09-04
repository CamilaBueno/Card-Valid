function cardValidator(cardNumber) {
    let result = 0;
    let multResult;
   // let cardNumber;
   let array = [];
   array.push(cardNumber).split('').map(x => parseInt(x)).reverse();
  
  
    if (!cardNumber || cardNumber.length != 16) {

      return new Error("Digite corretamente o número do seu cartão de crédito");
    }
  
    for (var i = 0; i < array.length; i++) {
      if (i % 2 !== 0) {
        result += array[i];
      } else {
        multResult = array[i] * 2;
        if (multResult >= 10) {
          multResult = multResult - 9;
        }
        result += multResult;
      }
    }
  
    if (result % 10 === 0) {
      //document.write("O número do cartão de crédito é válido!");
      return true;
    } else {
     // document.write("O número do cartão de crédito é inválido!");
     return false;
    }
  
  }
  
  module.exports = cardValidator;