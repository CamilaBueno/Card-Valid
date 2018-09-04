function cardValidator(cardNumber) {
 if (cardNumber === ''){
   return false;
 }
 if(typeof cardNumber !== 'number') {
   return false;
 }
    let result = 0;
    let multResult;
  // let cardNumber;
   let array = [];
   array.push(cardNumber);
   array.join('').split('').map(x => parseInt(x)).reverse();
  
    //if (!cardNumber || cardNumber.length != 16) {

     // return new Error("Digite corretamente o número do seu cartão de crédito");
   // }
  
    for (var i = 0; i < cardNumber.length; i++) {
      if (i % 2 !== 0) {
        if((cardNumber[i] * 2) >= 10) {
          return cardNumber[i] - 9;
         
      
      } 
       
      } else {
        return cardNumber[i];
        }
        result += cardNumber;
    }
  
  
    if (result % 10 === 0) {
      
      return true;
    } else {
     
     return false;
    }
  
  }
  
  module.exports = cardValidator;