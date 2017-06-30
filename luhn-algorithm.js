/*
- double every second digit, from the rightmost
- sum all the individual digits
- if the sum is a multiple of 10, the account number is possibly valid
*/

function check(number) {
  var numberArray = number.toString().split("");
  for(var i = (numberArray.length - 1); i > 0; i-- ) {
    if(i % 2 !== 0) {
      numberArray[i] *= 2;
    }
  }
  console.log(numberArray);  // *********************
}

check(79927398713);