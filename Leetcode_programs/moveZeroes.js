/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let count = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count++
        }
    }
    for(let j=0;j<count;j++){
        for(let i=0; i<nums.length-1;i++){
            if(nums[i]==0){
                let temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
            }
        }
    }

    return nums


/*********************************************************************/
/*          Other ways to solve this problem                         */
/*********************************************************************/
  /*  let fast = 1;
    let slow = 0;
    while(fast < nums.length){
        if(nums[slow] === 0){
          nums[slow] = nums[fast]
          nums[fast] = 0;
          fast++
        }
        else{
          slow++
          fast = slow
        }
    }
    return nums*/
};

console.log(moveZeroes([0,1,0,3,12]))