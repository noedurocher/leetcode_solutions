/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

	let arr = [];
	let new_arr = [];

	for(let i=0; i<arr2.length; i++){
		for(let j=0; j<arr1.length; j++){
			if(arr2[i]===arr1[j]){
				arr.push(arr1[j])
			}
		}

		
	}

	for(let i=0; i<arr1.length; i++){
		if(arr2.includes(arr1[i])){
			continue;
		}else{
				new_arr.push(arr1[i])
		}
	}

	new_arr.sort((a,b)=>{
		return a-b;
	});

	return arr.concat(new_arr);
    
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));