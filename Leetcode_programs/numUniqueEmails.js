/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

let arr = [];
let localName = [];
let domainName = [];
let local = [];

	for(let i=0; i<emails.length; i++){
		arr[i] = emails[i].split("@");
	}

	for(let i=0; i<arr.length;i++){
		localName[i] = arr[i][0];
	}

	for(let i=0; i<arr.length;i++){
		domainName[i] = arr[i][1];
	}

	for(let i=0; i<localName.length; i++){
		local[i] = localName[i].split("");
	}

	for(let i=0; i<local.length; i++){
		for(let j=0; j<local[i].length; j++){
			if(local[i][j]=="+"){
				localName[i] = local[i].splice(j);
			}
		}
	}

	for(let i=0; i<local.length; i++){
		for(let j=0; j<local[i].length; j++){
			if(local[i][j]=="."){
				localName[i] = local[i].splice(j, 1);
			}
		}
	}


	let count = 0;;

	let locName = [];
	for(let i=0; i<local.length; i++){
		locName[i] = local[i].join("");
	}

	let array = [];
	//let result = [];
	for(let i=0; i<emails.length; i++){
		array[i] = locName[i] + "@" + domainName[i]
	}

	
	let unique_set = [...new Set(array)]
	return unique_set.length;

	
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));
