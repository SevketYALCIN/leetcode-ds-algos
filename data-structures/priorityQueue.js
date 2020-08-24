class PriorityQueue {
  constructor(priority) {
    this.heap = []
    this.priority = priority || "max"
  }

  set(h) {
    this.heap = h
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp(this.priority);
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let element = this.heap[index],
        parentIndex = Math.floor((index - 1) / 2),
        parent = this.heap[parentIndex];

      if (this.priority === "max" && parent >= element) break
      if (this.priority === "min" && parent <= element) break

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex
    }
  }

  extract() {
    const ex = this.heap[0];
    const pop = this.heap.pop()
    if(this.heap.length > 0) {
      this.heap[0] = pop
      this.sinkDown(0)
    }
    return ex
  }

  sinkDown(index) {
    let left = 2 * index + 1,
      right = 2 * index + 2,
      ex = index;
    const length = this.heap.length

    if (left <= length && this.heap[left] !== undefined) {
      if ((this.priority === "max" && this.heap[left] > this.heap[ex]) || (this.priority === "min" && this.heap[left] < this.heap[ex]))
        ex = left
    }
    if (right <= length && this.heap[right] !== undefined) {
      if ((this.priority === "max" && this.heap[right] > this.heap[ex]) || (this.priority === "min" && this.heap[right] < this.heap[ex]))
        ex = right
    }

    if (ex !== index) {
      [this.heap[ex], this.heap[index]] = [this.heap[index], this.heap[ex]]
      this.sinkDown(ex)
    }
  }
}
