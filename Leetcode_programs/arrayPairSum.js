/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let new_arr = nums.sort((a,b)=>{
    	return a-b;
    }
    );

    let num = 0;

    for(let i=0; i<new_arr.length; i+=2){
    	num += new_arr[i]
    }

    return num;
};

console.log(arrayPairSum([1,4,3,2,5]));