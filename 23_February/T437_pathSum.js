// 双深度循环遍历
var pathSum = function(root, targetSum) {
    if(root===null){
        return 0;
    }
    let ret = dfs(root, targetSum);
    ret += pathSum(root.left, targetSum)
    ret += pathSum(root.right, targetSum)
    return ret;
};
const dfs = (node, targetSum)=>{
    if(node === null){
        return 0;
    }
    let num = 0;  
    if(node.val === targetSum){
        num++;
    }
    num += dfs(node.left, targetSum - node.val);
    num += dfs(node.right, targetSum - node.val);
    return num;
}

// 前缀和
var pathSum = function(root, targetSum) {
    const prefix = new Map();
    prefix.set(0, 1);
    return dfs_2(root, prefix, 0, targetSum);
}

const dfs_2 = (root, prefix, curr, targetSum) => {
    if (root == null) {
        return 0;
    }

    let ret = 0;
    curr += root.val;

    ret = prefix.get(curr - targetSum) || 0;
    prefix.set(curr, (prefix.get(curr) || 0) + 1);
    ret += dfs_2(root.left, prefix, curr, targetSum);
    ret += dfs_2(root.right, prefix, curr, targetSum);
    prefix.set(curr, (prefix.get(curr) || 0) - 1);

    return ret;
}