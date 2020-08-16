var canFinish = function(numCourses, prerequisites) {
  // Cycle detection using Topological Sort with DFS
  let visited  = {}
  let cycleDetection = {}
  for(let i = 0; i < prerequisites.length; i++) {
    if(!visited[prerequisites[i][1]])
      dfs(prerequisites[i][1], visited, prerequisites, cycleDetection)
    cycleDetection = {}
  }
  return visited["cycle"] ? false : true
};

let dfs = function(at, visited, prerequisites, cycleDetection) {
  const edges = getNodeEdges(at, prerequisites)
  cycleDetection[at] = true
  
  for(let i = 0; i < edges.length; i++) { 
    if(!visited[edges[i]]) {
      // check if cycle and end DFS
      if(cycleDetection[edges[i]]) {
        visited["cycle"] = true
        return
      }
      dfs(edges[i], visited, prerequisites, cycleDetection)
    }
  }
  visited[at] = true
}

let getNodeEdges = function(at, prerequisites) {
  let edges = []
  for(let i = 0; i < prerequisites.length; i++) {
    if(prerequisites[i][1] === at)
      edges.push(prerequisites[i][0])
  }
  return edges
}
