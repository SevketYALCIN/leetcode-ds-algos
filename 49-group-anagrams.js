const groupAnagrams = strs => {
  const hm = {}
  for (let s of strs) {
    const key = [...s].sort().join('');
    if (!hm[key])
      hm[key] = []
    hm[key].push(s)
  }
  return Object.values(hm)
}
