var spiralOrder = function(matrix) {
  if(matrix.length === 0)
    return []
  
  // spiral traversal
  let result = []
  while(matrix.length > 0) {
    // top
    if(matrix.length > 0) {
      result.push(...matrix.shift())
    }
    
    // right
    if(matrix.length > 0) {
      for(let i = 0; i < matrix.length; i++) {
        if(matrix[i].length > 0)
          result.push(matrix[i].pop())
      }
    }
    
    // bottom
    if(matrix.length > 0) {
      result.push(...matrix.pop().reverse())
    }
    
    // left
    if(matrix.length > 0) {
      for(let i = matrix.length-1; i >= 0; i--) {
        if(matrix[i].length > 0)
          result.push(matrix[i].shift())
      }
    }
  }
  return result
};
