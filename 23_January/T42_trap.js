/**
 * @param {number[]} height
 * @return {number}
 */
//双指针两遍扫描
// var trap = function(height) {
//     let pre = new Array(height.length).fill(0)
//     let post = new Array(height.length).fill(0)
//     let peak = height[0]
//     let trap = 0
//     for(let i = 1; i< height.length; i++){
//         pre[i] = peak
//         if(height[i] > peak){
//             peak = height[i]
//         }
//     }
//     peak = height[height.length-1]
//     for(let i= height.length-2; i>=0; i--){
//         post[i] = peak
//         if(height[i] > peak){
//             peak = height[i]
//         }
//     }
//      for(let i = 1; i< height.length-1; i++){
//         trap += Math.max(Math.min(pre[i],post[i])-height[i], 0) 
//     }
//     return trap
// };


//单调栈
var trap = function(height) {
    let ans = 0;
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            ans += currWidth * currHeight;
        }
        stack.push(i);
    }
    return ans;
};


height = [0,1,0,2,1,0,1,3,2,1,2,1]

trap(height)