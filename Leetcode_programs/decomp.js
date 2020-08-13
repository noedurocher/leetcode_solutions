var decompressRLElist = function(nums) {
    let arr = []
    let i = 0;
    while(i<nums.length){
    	let freq = i;
    	let value = i + 1;
    	let j=0;
    	while(j < nums[freq]){
    		arr.push(nums[value]);
    		j++;
    	}
        i += 2;
    }
    
    return arr;
};

console.log(decompressRLElist([1,1,2,3]));