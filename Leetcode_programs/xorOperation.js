/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = [], i=0, sum=0;
    while(i<n){
    	arr[i] = start + (2 * i);
    	sum ^= arr[i]
    	i++;
    }
    return sum;
};

console.log(xorOperation(1,7))