/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let count = 0, arr=[];
    for(let i=0; i<nums.length; i++){
    	count += nums[i];
    	arr.push(count);
    }
    return arr;
};

console.log(runningSum([1,1,1,1,1]));