/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let max_idx= Math.max(...indices)
    let arr = []
    for(let i=0; i<max_idx+1;i++){
    	arr.push([])
    }
    for(let i=0; i<indices.length;i++){
    	arr.splice(indices[i], 1, s[i])
    }

    return arr.join('')
};


console.log(restoreString('art', [1,0,2]))
//s = "codeleet", indices = [4,5,6,7,0,2,1,3]

