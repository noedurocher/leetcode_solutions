/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num % 4 == 0){
        return true;
    }
    return false
};

console.log(isPowerOfFour(16))