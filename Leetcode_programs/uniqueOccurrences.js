/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let objCount = {};

    for(let i=0; i<arr.length; i++){
    	if(!objCount[arr[i]])
    		objCount[arr[i]] = 0;
    	objCount[arr[i]] += 1;
    }

    let new_arr = Object.values(objCount);
    let newCount = {};

     for(let i=0; i<new_arr.length; i++){
    	if(!newCount[new_arr[i]])
    		newCount[new_arr[i]] = 0;
    	newCount[new_arr[i]] += 1;
    }

    let final_arr = Object.values(newCount);

    if(final_arr.length === new_arr.length){
    	return true;
    }

    return false;


};

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));