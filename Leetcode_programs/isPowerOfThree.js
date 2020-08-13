/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    let sum = 1;
    for(let i=3; i<=n; i*=3){
    	sum = i;
    }

    return sum == n? true:false;

};


console.log(isPowerOfThree(2));

/*
	3^3 = 1
	2^3 = 2 * 2 
*/