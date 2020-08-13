let arr = ["john", "jacob", "alphonso", "brian", "thomas"];

let arr_length = [];

const axios = require("axios");

let getPeople = async function getPeople(){
	const data = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
  	return data; // this will be the array of people  	
  
};

let disPage = async function disPage(){
	let people = await getPeople();
	console.log(people.data[99])
}

disPage();




/*
//This commented program display 
whose name is the longest or 
whose name is the shortest.

arr.forEach(ele=>{
	arr_length.push(ele.length);
})

let maximum = Math.max(...arr_length);
let minimum = Math.min(...arr_length);

for(let i=0; i<arr.length; i++){
	if(arr[i].length===maximum){
		console.log(`${arr[i]} has (${maximum}) the most letters in their name than any others`);
	}else if(arr[i].length===minimum){
		console.log(`${arr[i]} has (${minimum}) the less letters in their name than any others`);
	}
}*/

//This program displays how may vowels each name in the array has.
/*let str_arr =[];
let vowels = "aeiouAEIOU";

arr.forEach(str=>{
	str_arr.push(str.split(""));
});

let count_arr = []

str_arr.forEach(split_arr=>{
	let count = 0;
	split_arr.forEach(letter=>{
		if(vowels.includes(letter))
		count++;
	});
	count_arr.push(count);
});

let obj= [];
for(let i=0; i<arr.length; i++){
	console.log(`${arr[i]} has ${count_arr[i]} vowel(s).`);
}*/
