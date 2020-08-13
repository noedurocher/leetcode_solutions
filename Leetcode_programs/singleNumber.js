/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++){
        let count = 0
        for (j = 0; j < nums.length; j++){
            if (i !== j && nums[i] === nums[j]){
                count++
            }
           
        }
        if (count === 0) return nums[i]  
    }     
};
 

 
//console.log(singleNumber([2,2,1, 100, 1000, 34, 3]));
console.log(singleNumber([2,2,1,1,1,3,3,4]));