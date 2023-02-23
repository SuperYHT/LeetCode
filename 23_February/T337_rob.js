// 树形DP题目
var rob = function(root) {  

    const dfs = (node)=>{
        if(!node){
            return [0,0];
        }
        let dp = new Array(2).fill(0);
        const left = dfs(node.left);
        const right = dfs(node.right);
        dp[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        dp[1] = node.val + left[0] + right[0]
        return dp
    }
    const cash = dfs(root);
    return Math.max(cash[0], cash[1]);
};
