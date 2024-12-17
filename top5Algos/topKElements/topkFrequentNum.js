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
            if (this.heap[idx][1] >= this.heap[parentIdx][1]) break;

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

            if (leftIdx < n && this.heap[leftIdx][1] < this.heap[smallestIdx][1]) smallestIdx = leftIdx;
            if (rightIdx < n && this.heap[rightIdx][1] < this.heap[smallestIdx][1]) smallestIdx = rightIdx;

            if (smallestIdx === idx) break;

            // Swap the current node with the smallest child
            [this.heap[idx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[idx]];
            idx = smallestIdx;
        }
    }
}

function topKFrequent(nums, k) {
    // Step 1: Count frequencies using a Map
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Use a Min-Heap to store the top k frequent elements
    const minHeap = new MinHeap();

    for (const [key, value] of frequencyMap.entries()) {
        minHeap.add([key, value]);
        if (minHeap.size() > k) {
            minHeap.poll(); // Remove the element with the smallest frequency
        }
    }

    // Step 3: Extract the k most frequent elements from the heap
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.poll()[0]); // Push the key (number) into the result array
    }

    return result;
}

// Example Usage
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const result = topKFrequent(nums, k);
console.log(`Top ${k} frequent elements:`, result);
