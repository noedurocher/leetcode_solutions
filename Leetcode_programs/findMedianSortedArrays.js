/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];

    arr = nums1.concat(nums2);

    let sorted_arr = arr.sort((a,b)=> a-b);

    let mid = sorted_arr.length/2;
    
    if(sorted_arr.length % 2 != 0){
    	return (sorted_arr[Math.floor(mid)]).toFixed(1);
    }else{
    	return (sorted_arr[mid] + sorted_arr[mid-1])/2;
    }

};


console.log(findMedianSortedArrays([1,2], [4, 5, 6]));

//[1,2,3,4,5,6]