/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let pre = new Array(height.length).fill(0)
    let post = new Array(height.length).fill(0)
    let peak = height[0]
    let trap = 0
    for(let i = 1; i< height.length; i++){
        pre[i] = peak
        if(height[i] > peak){
            peak = height[i]
        }
    }
    peak = height[height.length-1]
    for(let i= height.length-2; i>=0; i--){
        post[i] = peak
        if(height[i] > peak){
            peak = height[i]
        }
    }
     for(let i = 1; i< height.length-1; i++){
        trap += Math.max(Math.min(pre[i],post[i])-height[i], 0) 
    }
    return trap
};