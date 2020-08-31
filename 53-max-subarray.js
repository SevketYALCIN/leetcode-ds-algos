var maxSubArray = function(nums) {
  // DP where sub problem -> dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0)
  // O(1) space with previous variable instead of dp array
  // O(n) time
  
  let previous = nums[0]
  let max = previous
  
  for(let i = 1; i<nums.length;i++) {
    previous = nums[i] + (previous > 0 ? previous : 0)
    max = Math.max(max, previous)
  }
  
  return max
};
