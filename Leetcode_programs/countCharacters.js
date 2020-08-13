/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

	let arr = [];
	let num = 0;

	let new_arr = [];

	let my_arr=[];
	let value;

	let str = "";

	let new_char = chars.split("");

	words.forEach(word=>{
		arr.push(word.split(""));
	})

	//return arr;

	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr[i].length; j++){
			new_char.includes(arr[i][j])
		}

		
		//console.log(new_arr[i]);
		
	}

	//return my_arr

};

//console.log(countCharacters(["cat","bt","hat","tree"], "atach"));

countCharacters(["cat","bt","hat","tree"], "atach");