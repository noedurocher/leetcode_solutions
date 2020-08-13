/*/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let new_arr = [];
    	let i=0;
    	while(i<nums.length){
    		let idx = index.shift();
    		new_arr.splice(idx, 0, nums[i]);
    		i++;
    	}

    return new_arr;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));