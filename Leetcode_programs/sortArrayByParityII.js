/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(arr) {

    let i=0,k=0;m=0,f=1,n=0;
    let even_arr = [],odd_arr = [],new_arr = [];
    while(i<arr.length){
    	if (arr[i] % 2 == 0){
    		even_arr.push(arr[i]);
    	}else{
    		odd_arr.push(arr[i]);
    	}
    	i++;
    }
    
    while(k<arr.length && m < even_arr.length){
    	new_arr[k] = even_arr[m];
    	m++;
    	k+=2;
    }

    while(f<arr.length && n < odd_arr.length){
    	new_arr[f] = odd_arr[n]
    	n++;
    	f+=2;
    }

    return new_arr
};

console.log(sortArrayByParityII([3,2,2,2]));