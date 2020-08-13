/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let num = A.join("");

    let new_num = (num);

    let my_num = (BigInt(new_num) + BigInt(K));

    my_num = my_num.toString().split("");

    let arr = [];

    my_num.forEach((el)=>{
    	arr.push(+el);
    });

    return arr;
};

console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));