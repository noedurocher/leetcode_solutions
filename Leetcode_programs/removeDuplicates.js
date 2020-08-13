/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let collapse = true;
    
    let arr = S.split("");
    let str="";

    while(collapse){
    	let i= 0;
    	collapse = false;
    	while(i<arr.length){
	    	if(arr[i]== arr[i+1]){
	    		arr[i] = "";
	    		arr[i+1]="";
	    		collapse = true;
	    		break;
	    	}
	    	i++;
	    }

    	str= arr.join("")
    }

    return str;
};

console.log(removeDuplicates("abbaca"));