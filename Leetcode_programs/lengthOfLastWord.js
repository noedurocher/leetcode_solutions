/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //var words = s.trim();
    //return words[words.length - 1].length;

    //return words;

    let word = s.trim().split(" ");
    return word[word.length-1].length;

    /*var words = s.trim().split(' ');
    return words[words.length - 1].length;*/
    
};

console.log(lengthOfLastWord("a "));