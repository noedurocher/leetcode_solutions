/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
	let arr = [];

    for(i=0; i<T.length;i++){
        for(j=i+1;j<T.length;j++){
            if(T[i] < T[j]) {
                arr.push(j-i)
                break;
            }
            if(j==T.length-1){
                arr.push(0);
            }
        }
    }

    if(arr.length < T.length){
            arr.push(0);
    }

    return arr;
};

console.log(dailyTemperatures([34,80,80,34,34,80,80,80,80,34]));