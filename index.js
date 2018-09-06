function cardValidator(cardNumber) {
  if (cardNumber === "") {
    return false;
  }
  
  if (typeof cardNumber !== "number") {
    return false;
  }

  let result = 0;
  let multResult;

  cardNumber = cardNumber.toString().split("");

  for(let i = 0; i < cardNumber.length; i++) {
    if(i % 2 !== 0) {
      result += parseInt(cardNumber[i]);
    } else {
      multResult = cardNumber[i] * 2;
      if (multResult >= 10) {
        multResult = multResult - 9;
      }
      result += multResult;
    }
  }


  if (result % 10 !== 0) {
    return false;
  } 

  return true;

}

module.exports = cardValidator;