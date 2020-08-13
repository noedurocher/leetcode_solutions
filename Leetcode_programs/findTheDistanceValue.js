/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let new_arr = [];
    let i = 0;
    while (i<arr1.length){
    	let j=0;
    	while(j<arr2.length){
    		let a1 = arr1[i];
    		let a2 = arr2[j];
    		let result = a1-a2;
    		let absol = Math.abs(result);
    		if(absol <= d){
    			new_arr.push(absol);
    		}

    		j++;
    	}
    	i++;
    }

    return new_arr;
};

console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2));