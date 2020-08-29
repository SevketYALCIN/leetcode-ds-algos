var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const map = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) map[t[i]]--
    else return false
  }

  return true
};


// Prime number solution, works in the range of Java 64bits floats
var isAnagram = function(s, t) {
  let primes = getNPrimes(26)
  let charCode = 97
  let hm = {}
  for(let i = 0; i < primes.length; i++, charCode++) {
    hm[String.fromCharCode(charCode)] = primes[i]
  }
  
  let ps = 1
  let pt = 1
  s.split('').map(l => ps *= hm[l])
  t.split('').map(l => pt *= hm[l])
  console.log(ps, pt)
  return ps === pt
};

let getNPrimes = function (n) {
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
