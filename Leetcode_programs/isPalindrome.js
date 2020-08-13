/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.split("");

    let rev = arr.reverse();

    return rev.join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
/*
	Input: "A man, a plan, a canal: Panama"
	Output: true
*/