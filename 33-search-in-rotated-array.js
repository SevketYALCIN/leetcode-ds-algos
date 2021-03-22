/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(nums.length === 1)
    return nums[0] === target ? 0 : -1
  
  let i = 0
  let j = nums.length - 1
  
  while(i < j) {
        console.log(i,j)

    const mid = Math.floor((j+i) / 2)
    
    if (nums[mid] === target) return mid;
    if (nums[i] === target) return i;
    if (nums[j] === target) return j;
    
    // means left is sorted  
    if(nums[mid] > nums[i]) {
      if(target > nums[i] && target < nums[mid])
        j = mid - 1
      else
        i = mid + 1
    } 
    // means right is sorted
    else if (nums[mid] < nums[j]) {
      if(target > nums[mid] && target < nums[j])
        i = mid + 1
      else
        j = mid - 1
    } else {
      return -1
    }
  }
  
  return -1
};
