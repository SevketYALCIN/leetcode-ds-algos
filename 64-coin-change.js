var coinChange = function(coins, amount) {
  if(amount < 1)
    return 0
  
  let dp = [0]
  
  for(let i = 0; i<= amount; i++){
    dp.push(amount+1)
  }
  
  for(let i = 1; i<=amount;i++) {
    for(let j = 0; j < coins.length; j++) {
      if(coins[j] <= i)
        dp[i] = Math.min(dp[i], dp[i-coins[j]]+1)
    }
  }
  
  return dp[amount] > amount ? -1 : dp[amount]
}

var coinChangeTopDown = function(coins, amount) {
  if(amount < 1)
    return 0
  return coinChangeRecursive(coins, amount, [])
};

var coinChangeRecursive = function(coins, amount, count) {
  if(amount < 0)    
    return -1
  if(amount === 0) 
    return 0
  if(count[amount-1] !== undefined)
    return count[amount-1]
  
  let min = Math.pow(2, 31)
      
  for(let i = 0; i<coins.length; i++) {
    let res = coinChangeRecursive(coins, amount - coins[i], count)
    if(res >= 0 && res < min)
      min = 1 + res
  }
  
  count[amount-1] = min === Math.pow(2,31) ? -1 : min
  return count[amount-1]
}
