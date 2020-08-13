/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let arr = S.split("");

    //return arr.join("-");

    return arr.reverse().join("");

    
};


console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));

/*
	Input: "Test1ng-Leet=code-Q!"
	Output: "Qedo1ct-eeLg=ntse-T!"
*/