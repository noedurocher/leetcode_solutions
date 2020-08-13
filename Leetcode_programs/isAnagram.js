/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length != t.length){
    	return false;
    }

    let arr1 = s.split("");
    let arr2 = t.split("");

    let s_sort = arr1.sort().join("");
    let t_sort = arr2.sort().join("");

    return (s_sort==t_sort) ? true:false;
};

console.log(isAnagram("anagram", "nagaram"));


/*
	Input: s = "anagram", t = "nagaram"
	Output: true
*/