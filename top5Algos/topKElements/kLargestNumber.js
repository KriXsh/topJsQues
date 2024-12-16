// question link -  https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/ 

// approch -
/*
[Approach – 1] Using Sorting
[Approach – 2] Using Quick Sort Partitioning Algorithm:
[Approach – 3] Using Priority Queue(Min-Heap)
*/



class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Add an element to the heap
    add(val) {
      this.heap.push(val);
      this._heapifyUp();
    }
  
    // Remove and return the smallest element
    poll() {
      if (this.size() === 1) return this.heap.pop();
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._heapifyDown();
      return root;
    }
  
    // Peek at the smallest element
    peek() {
      return this.heap[0];
    }
  
    // Return the size of the heap
    size() {
      return this.heap.length;
    }
  
    // Heapify up (to maintain heap property after adding an element)
    _heapifyUp() {
      let idx = this.size() - 1;
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (this.heap[idx] >= this.heap[parentIdx]) break;
  
        // Swap the current node with its parent
        [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
        idx = parentIdx;
      }
    }
  
    // Heapify down (to maintain heap property after removing the root)
    _heapifyDown() {
      let idx = 0;
      const n = this.size();
      while (true) {
        const leftIdx = 2 * idx + 1;
        const rightIdx = 2 * idx + 2;
        let smallestIdx = idx;
  
        if (leftIdx < n && this.heap[leftIdx] < this.heap[smallestIdx]) smallestIdx = leftIdx;
        if (rightIdx < n && this.heap[rightIdx] < this.heap[smallestIdx]) smallestIdx = rightIdx;
  
        if (smallestIdx === idx) break;
  
        // Swap the current node with the smallest child
        [this.heap[idx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[idx]];
        idx = smallestIdx;
      }
    }
  }
  
  // Function to find the k largest elements
  function kLargest(arr, k) {
    if (k <= 0 || k > arr.length) {
      throw new Error("Invalid value of k. Ensure k > 0 and k <= array length.");
    }
  
    // Min-heap to store the k largest elements
    const minHeap = new MinHeap();
  
    // Add the first k elements to the heap
    for (let i = 0; i < k; i++) {
      minHeap.add(arr[i]);
    }
  
    // Traverse the rest of the array
    for (let i = k; i < arr.length; i++) {
      if (arr[i] > minHeap.peek()) {
        minHeap.poll();
        minHeap.add(arr[i]);
      }
    }
  
    // Extract elements from the heap
    const result = [];
    while (minHeap.size() > 0) {
      result.push(minHeap.poll());
    }
  
    // Sort the result in descending order
    result.sort((a, b) => b - a);
    return result;
  }
  
  // Example Usage
  const arr = [1, 23, 12, 9, 30, 2, 50];
  const k = 3;
  
  try {
    const res = kLargest(arr, k);
    console.log(res.join(" ")); // Output: 50 30 23
  } catch (err) {
    console.error("Error:", err.message);
  }
  