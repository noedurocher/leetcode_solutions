/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let arr = nums.sort((a, b)=> a-b);
    let i = arr[arr.length-1]
    let j = arr[arr.length-2]

    let result = (i-1) * (j-1);
    return result;
};

console.log(maxProduct([3,7]));