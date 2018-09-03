function cardValidator() {
    let result = 0;
    let multResult;
    let cardNumber;
    let cardNumberReverse = cardNumber.split('').reverse();
  
  
    if (!cardNumber || cardNumber.length != 16) {
      //alert("Digite corretamente o número do seu cartão de crédito!");
      return false;
    }
  
    for (var i = 0; i < cardNumber.length; i++) {
      if (i % 2 !== 0) {
        result += parseInt(cardNumber[i]);
      } else {
        multResult = cardNumber[i] * 2;
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