/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let front = 0, back = n, arr=[];
    for(front; front<n;front++,back++){
    	arr.push(nums[front], nums[back]);
    }
    return arr;
};

console.log(shuffle([2,5,1,3,4,7], 3));