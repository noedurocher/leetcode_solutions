/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let arr = []
  if(nums1.length<nums2.length){
    for (let ele of nums1){
      if(nums2.includes(ele)){
        let idx = nums2.indexOf(ele)
        nums2.splice(idx, 1)
        arr.push(ele)
      }
    }
  }else{
    for (let ele of nums2){
      if(nums1.includes(ele)){
        let idx = nums1.indexOf(ele)
        nums1.splice(idx, 1)
        arr.push(ele)
      }
    }
  }

  return arr;
};

console.log(intersect([4,9,5], [9,4,9,8,4]))