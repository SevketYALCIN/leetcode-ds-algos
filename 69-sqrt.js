const mySqrt = (x) => {
  if (x == 0 || x == 1)
    return x
  
  let low = 0
  let high = x
  let mid
  while (low <= high) {
    mid = parseInt(low + (high - low) / 2)
  
    if (x < mid * mid)
      high = mid - 1
    else
      low = mid + 1
  }
  
  return low - 1
}
