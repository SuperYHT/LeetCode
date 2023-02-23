var convertBST = function(root) {
    if(root === null){
        return null;
    }
    let sum = 0
    const dfs = (node)=>{
    if(node === null){
        return 
    }
    dfs(node.right)
    sum += node.val
    node.val = sum
    dfs(node.left)
    }
    dfs(root);
    return root;
};