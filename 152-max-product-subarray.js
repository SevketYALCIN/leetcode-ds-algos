var maxProduct = function(nums) {
  let res = nums[0]
  let min = res
  let max = res
  
  for(let i=1;i<nums.length;i++) {
    if(nums[i] < 0) {
      const temp = min
      min = max
      max = temp
    }
    
    max = Math.max(nums[i], nums[i] * max)
    min = Math.min(nums[i], nums[i] * min)
    
    res = Math.max(res, max)
  }
  
  return res
};
