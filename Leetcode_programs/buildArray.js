/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
	let new_arr = [];
	if(is_sequencial(target)){
		let k=0;
		while(k<target.length){
			new_arr.push("Push");
			k++;
		}
	}else{
		let i=0, start = 1, arr=[];
		while(i<target[target.length-1]){
			if(target[i] ==start){
				arr.push(start)
			}else{
				arr.splice(i, 0, start);
			}
			start++;
			i++;
		}

		let j = 0;

		while(j<arr.length){
			if(target.includes(arr[j])){
				new_arr.push("Push")
			}else{
				new_arr.push("Push");
				new_arr.push("Pop");
			}
			j++;
		}
	}
	return new_arr;
};

function is_sequencial(arr){
	let i=0, start=1;
	while(i<arr.length){
		if(arr[i]!== start){
			return false;
		}
		start++;
		i++;
	}

	return true;
}

console.log(buildArray([2,3,4], 4));