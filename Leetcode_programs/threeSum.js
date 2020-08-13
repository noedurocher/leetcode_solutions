/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = [];
    let i = 0;
    while(i<nums.length){
    	let j=i+1;
    	while(j<nums.length){
    		let k = j+1;
    		while(k<nums.length){
    			if((nums[i] + nums[j] + nums[k])===0 &&
    				(k>j>i)){
    				arr.push([nums[i], nums[j], nums[k]]);
    			}
    			k++;
    		}
    		j++;
    	}
    	i++;
    }

    return arr;
};

console.log(threeSum([0,0,0,0]))