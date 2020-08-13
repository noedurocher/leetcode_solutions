/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let arr = [];

    let str = digits.join("");
   	let num = BigInt(str) + BigInt(1);
   	let str2 = num.toString();

   	for(let i=0; i<str2.length;i++){
   		arr.push(+str2[i]);
   	}

   	return arr;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));