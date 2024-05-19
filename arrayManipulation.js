const actualArray = [16, 24, 39, 4, 65];

 function processArray(numbers){
    return numbers.map(function(num) {
if (num % 2 === 0) {
    // If the number is even, square it
    return num * num;
  } else {
    // If the number is odd, triple it
    return num ** 3;
  }
});
 }
const calculatedArray = processArray(actualArray);
 console.log(calculatedArray);