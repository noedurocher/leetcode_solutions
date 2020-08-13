/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max_num = Math.max(...candies), arr=[];
    for(let i=0; i<candies.length; i++){
    	arr.push(candies[i] + extraCandies >=max_num)
    }
    return arr;

    /*
    let max_num = Math.max(...candies);
    const result = candies.map(candie=>(candie+extraCandies)>=max_num);
    return result;*/

};

console.log(kidsWithCandies([2,3,5,1,3], 3));