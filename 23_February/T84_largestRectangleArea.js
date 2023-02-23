/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const len = heights.length;
    let left = new Array(len);
    let right = new Array(len);
    let stack = new Array();
    //左侧最近
    for (let i = 0; i < len; i++) {
        while (heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop() //出栈
        }
        left[i] = (stack.length === 0 ? -1 : stack[stack.length - 1]);
        stack.push(i)
    }
    console.log(left);
    stack = []
    //右侧最近
    for (let i = len - 1; i > -1; i--) {
        while (heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop() //出栈
        }
        right[i] = (stack.length === 0 ? len : stack[stack.length - 1]);
        stack.push(i)
    }
    var ans = 0;
    for (let i = 0; i < len; ++i) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }
    console.log(right);
    return ans;
};
largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3])





var threeSum = function (nums) {
    let ans = []
    if (nums === null || nums.length < 3)
        return ans;
    nums.sort();
    for (let i = 0; i < nums.length - 3; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        let tmp = 0;
        if (nums[i] === nums[i + 1])
            continue

        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                ans.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return ans;
};