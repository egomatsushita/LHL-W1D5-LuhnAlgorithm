/*
- double every second digit, from the rightmost
- sum all the individual digits
- if the sum is a multiple of 10, the account number is possibly valid
*/

// A function that convert a two digit number to a one digit number
function makeOneDigit(number) {
  return number - 9;
}

function isNumberLength_11(array) {
  return array.length === 11;
}
function check(number) {
  var numberArray = number.toString().split("");
  var sum = 0;

  // check if a given number has 11 numbers
  if(!isNumberLength_11(numberArray)) {
    var message = "given number does not have 11 numbers."
    return message;
  }

  for(var i = (numberArray.length - 1); i >= 0; i-- ) {
    if(i % 2 !== 0) {
      numberArray[i] *= 2;
      if(numberArray[i] > 9) {
        numberArray[i] = makeOneDigit(numberArray[i]);
      }
    }
    sum += Number(numberArray[i]);
  }

  return sum % 10 === 0;
}


module.exports = check;