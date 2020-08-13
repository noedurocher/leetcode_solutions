/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result = 0;
    result = dividend/divisor;
    if(result > Math.pow(2,31)-1){
        result = result - 1;
    }else{
    	result = result
    }

    if(result>=0){
    	return Math.floor(result);   
    }else{
    	return Math.ceil(result);
    }
};
console.log(divide(10,3));