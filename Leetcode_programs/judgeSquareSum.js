/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {

	let root = Math.sqrt(c);
	let rounded = Math.floor(root);
	let power = Math.pow(root, 2);
	let sum = 0;
	let arr = [];

	if(Math.pow(rounded, 2) === power){
		return true;
	}else{
	    for(let i=0; i<Math.sqrt(c); i++){
	    	for(let j=0; j<Math.sqrt(c); j++){
	    		sum = (Math.pow(i, 2))+ (Math.pow(j,2));
	    		arr.push(sum);
	    	}
	    }

	    
	}

    return arr.some(el=>{
    	return el === c;
    });
};

console.log(judgeSquareSum(1000000000));


/*

	i=1, sum=0-- sum=1
	i=2, sum=1-- sum = 5
	i=3, sum=5-- sum = 14

*/