/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let sum = 0;
    sum = BigInt(num1) * BigInt(num2);
    
   let new_sum = "";

   new_sum = sum;

   return new_sum.toString();
};

console.log(multiply("123456789",
"987654321"));