/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	let arr = [];
   for(let i=0; i<nums1.length; i++){
   		for(let j=0; j<nums2.length; j++){
   			if(nums1[i]==nums2[j]){
   				arr.push(nums1[i]);
   			}
   		}

   }

   let unique = [... new Set(arr)];

   return unique;
};

console.log(intersection([4,9,5], [9,4,9,8,4]))


/*
	Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
	Output: [9,4]
*/