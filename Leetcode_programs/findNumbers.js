/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

	//create counter
	let count=0;
	//convert elements of array to string
	let arr=[];
    for(let i=0; i<nums.length; i++){
    	arr.push(nums[i].toString().split(""));
    }

    //count even digit of array length
    for(let j=0; j<arr.length; j++){
    	if(arr[j].length % 2===0){
    		count++;
    	}
    }

    return count;
};

console.log(findNumbers([555,901,482,1771]));