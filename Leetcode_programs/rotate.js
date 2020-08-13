/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	let i = 0;
	while (i<k){
		let ele = nums.pop();
		nums.unshift(ele);
		i++;
	}

	return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));