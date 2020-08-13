/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let i = 0;
    let new_arr = []
    while (i < nums.length){
    	let count = 0;
        let j = 0;
        while (j<nums.length){
        	if (j != i && nums[j]<nums[i]){
        		count++;
        	}
        	j++;
        }

        new_arr.push(count);
        i++;
    }

    return new_arr;
    
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
