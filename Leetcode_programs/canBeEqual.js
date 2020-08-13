/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
	let obj1 = {}, obj2={};
	for(let i=0; i<target.length; i++){
		obj1[target[i]] = (obj1[target[i]] + 1) || 1
	}

	for(let i=0; i<arr.length; i++){
		obj2[arr[i]] = (obj2[arr[i]] + 1) || 1
	}
	if(target===arr){
		return true
	}else{
		for(let key in obj2){
			if (obj2[key]!==obj1[key]){
				return false;
			}
		}
		return true;
	}  
};

console.log(canBeEqual([937,396,309,316,278,305,937,563,385,816,333,523,874,47,281,984,431,692], 
	[937,385,816,937,309,523,281,278,316,396,984,431,47,333,692,874,563,305]))