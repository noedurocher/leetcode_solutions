/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let arr1 = [];
    let arr2 = [];
    let new_num1;
    let new_num2;
    
    for(let i=0; i<num1.length; i++){
    	arr1.push(+num1[i]);
    }

    for(let i=0; i<num2.length; i++){
    	arr2.push(+num2[i]);
    }

    new_num1 = Number(arr1.join(""));
    new_num2 = Number(arr2.join(""));

    return new_num1 + new_num2;
};

console.log(addStrings("12", "13"));