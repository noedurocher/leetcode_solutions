/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
	count = 0;
	if (num==0){
		return count;
	}

	while (num !=0){
		if(num%2==0){
			num = num / 2;
			count++;
		}
		if(num%2!=0){
			num = num - 1;
			count++;
		}
	}

	return count;   
};

/*

	while num !=0
	isEven(num) num = num/2
	isOdd(num) num = num-1
*/

console.log(numberOfSteps(123));