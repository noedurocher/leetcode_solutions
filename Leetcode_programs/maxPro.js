/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
	

	let my_sort = nums.sort((a,b)=>b-a);
	return my_sort;
	// let sum = 1;

	// for(let i=0; i<3; i++){
	// 	sum *= my_sort[i];
	// }
	// return sum;
};

console.log(maximumProduct([-4,-3,-2,-1,60]));


/*
	-4,-3,-2
	-4,-1,60
	-3,-2,-1
	-3,-60, null
*/