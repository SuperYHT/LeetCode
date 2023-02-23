var numIslands = function(grid) {
    let number = 0
    let row = grid.length;
    let col = grid[0].length;
    const dfs= (grid,i,j)=>{
        if(inArea(i, j, row, col) || grid[i][j]==='0')
            return;
        grid[i][j] = '0';
        dfs(grid,i+1,j);
        dfs(grid,i-1,j);
        dfs(grid,i,j+1);
        dfs(grid,i,j-1);
    }
    const inArea = (i, j, r, c)=>{
        if(i<0|| i>r-1|| j<0 || j>c-1)
            return true
        else
            return false
    }
    for(let i=0; i<row ;i++){
        for(let j=0; j<col ;j++){
                if(grid[i][j]==='1'){
                    number++;
                    dfs(grid,i,j);
                }
        }
    }
    return number;
};
numIslands([["1","0","1","1","0","1","1"]])
