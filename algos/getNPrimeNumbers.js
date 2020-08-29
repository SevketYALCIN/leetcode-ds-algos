let getNPrimes = function(n) {
  let i = 3
  let primes = [2]

  while (primes.length < n) {
    let flag = 1

    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = 0
        break
      }
    }

    if (flag == 1)
      primes.push(i)

    i++
  }
  
  return primes
}  
