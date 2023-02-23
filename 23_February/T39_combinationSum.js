var combinationSum = function(candidates, target) {
    const n = candidates.length;
    candidates.sort((a, b)=>{
        return a-b;
    })
    let combination = [];
    const dfs = (curr, index,path)=>{
        if(curr < 0){
            return;
        }
        if(curr===0){
            combination.push(path);
            return;
        }
        for(let i = index ;i<n;i++){
            dfs(curr - candidates[i], i,[...path,candidates[i]]);
        }
    }
    dfs(target, 0,[]);
    return combination;
};
combinationSum([2,3,6,7], 7)

let num = 'b'.charCodeAt()-'a'.charCodeAt()

console.log(num)