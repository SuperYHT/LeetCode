/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const swap = (array, i, j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    const buildHeap = (num, heapSize, map) => {
        for (let i = Math.floor(heapSize / 2); i >= 0; --i) {
            maxHeapify(num, i, heapSize, map);
        }
    }
    const maxHeapify = (num, index, heapSize, map) => {
        let lChild = index * 2 + 1;
        let rChild = index * 2 + 2;
        let max = index;
        if (lChild < heapSize && map.get(num[lChild]) > map.get(num[max])) {
            max = lChild;
        }
        if (rChild < heapSize && map.get(num[rChild]) > map.get(num[max])) {
            max = rChild;
        }
        if (max !== index) {
            swap(num, index, max);
            maxHeapify(num, max, heapSize, map);
        }
    }


    let map = new Map();
    for (let val of nums) {
        map.set(val, (map.get(val) || 0) + 1);
    }
    let list = []
    for (let key of map.keys()) {
        list.push(key)
    }
    let ans = []
    let heapSize = list.length;

    buildHeap(list, heapSize, map);
    for (let i = 0; i < k; i++) {
        swap(list, 0, heapSize - 1)
        ans.push(list.pop())
        --heapSize;
        maxHeapify(list, 0, heapSize, map);
    }

    return ans;
};


topKFrequent([5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0, 2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6, 6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7, 0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1, 9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5], 7)