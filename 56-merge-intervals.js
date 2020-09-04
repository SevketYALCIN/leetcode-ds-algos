const merge = (intervals) => {
  if(intervals.length === 0)
    return []
  
  intervals = intervals.sort((a,b) => a[0] - b[0])
  let mergedIntervals = [intervals[0]]
  
  for(let i = 1; i < intervals.length; i++) {
    if(isOverlapping(intervals[i], mergedIntervals[mergedIntervals.length-1])) {
      mergedIntervals[mergedIntervals.length-1] = 
        [Math.min(intervals[i][0], mergedIntervals[mergedIntervals.length-1][0]), 
         Math.max(intervals[i][1], mergedIntervals[mergedIntervals.length-1][1])]
    }
    else
      mergedIntervals.push(intervals[i])
  }
  
  return mergedIntervals
};

const isOverlapping = (a, b) => {
  return a[0] <= b[1] && b[0] <= a[1]
}
