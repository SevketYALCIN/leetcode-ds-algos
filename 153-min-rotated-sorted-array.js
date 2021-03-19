var findMin = function(nums) {
  if(nums.length === 1)
    return nums[0]
   
  let mid = nums.length-1
  
  while(nums.length > 1) {
    if(nums.length === 2)
      return Math.min(nums[0], nums[1])
    
    let lastValue = nums[nums.length-1]
    mid = Math.floor(nums.length / 2)
    
    if((mid - 1 < 0 || nums[mid-1] > nums[mid]) && 
       (mid + 1 >= nums.length || nums[mid+1] > nums[mid]))
      break

    if(nums[mid] > lastValue) {
      nums = nums.slice(mid)
    } else {
      nums = nums.slice(0, mid + 1)
    }
  }
  
  return nums[mid]
};
