var maxPathSum = function(root) {
    let maxSum = -Infinity;
    const dfs = (Node)=>{
        if(Node===null){
            return 0;
        }        
        const left = dfs(Node.left);
        const right = dfs(Node.right);
        maxSum = Math.max(maxSum, left+Node.val+right);
        const out = Math.max(left,right)+Node.val;
        return out < 0 ? 0 : out
    }
    dfs(root);
    return maxSum;
};