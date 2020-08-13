/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

	//convert to string
	let str = n.toString();

	//let's get all digit
	let str_di = str.split("");

	let num1=1, num2=0;

	//convert back to number and multiply
	for(let i=0; i<str_di.length; i++){
		num1 *= +str_di[i];
	}

	//convert back to number and add
    for(let i=0; i<str_di.length; i++){
		num2 += +str_di[i];
	}

    return num1-num2;
};

console.log(subtractProductAndSum(932));