/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let new_arr = [];
    for(let i=0; i<arr2.length; i++){
    	if(arr1.includes(arr2[i])){
    		new_arr.push(arr2[i]);
    	}
    }

    let final_arr = [];

     for(let i=0; i<arr3.length; i++){
    	if(new_arr.includes(arr3[i])){
    		final_arr.push(arr3[i]);
    	}
    }

    return final_arr;
    
};


let arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8];
console.log(arraysIntersection(arr1, arr2, arr3));