/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

	let arr = [];
	let sum = 0;
    
    let new_num = Math.ceil(num / 2);
    for(let i=0; i<=new_num; i++){
        sum = i*i;
        arr.push(sum);
    }

    return arr.some(value=>{
    	return value== num;
    });

    //return arr;
};

console.log(isPerfectSquare(2147483647));

