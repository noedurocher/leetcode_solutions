/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr1 = s.split("");
    let arr2 = t.split("");
    
    for(let i=0; i <arr2.length; i++){
        let count = 1;
        for(let j=0; j<arr1.length; j++){
            if(arr2[i]==arr1[j]){
                count++;
            }
        }
        
        if(count==1) return arr2[i]
    }
};


console.log(findTheDifference("a", "aa"));