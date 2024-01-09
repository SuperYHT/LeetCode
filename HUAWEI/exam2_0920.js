let read = require('readline').createInterface({ input: process.stdin});
let iter = read[Symbol.asyncIterator]();
let readline = async () => (await iter.next()).value;

function shortestPath(grid, loc) {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]; //上下左右四个方向
    const q = []; // queue Array<[x,y]>
    const vis = new Array(m).fill(0).map(() => new Array(n).fill(0));
    q.push(loc);
    let step = 0;
    while (q.length) {
      let size = q.length;
      while (size > 0) {
        size--;
        const [x, y] = q.shift();
        if (y === n - 1) {
          return step;
        }
        if (vis[x][y]) continue;
        vis[x][y] = 1;
        for (const [sx, sy] of dirs) {
          const nx = x + sx, ny = y + sy;
          if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny]===0) continue;
          q.push([nx, ny]);
        }
      }
      step += 1;
    }
    return -1;
  };

(async function () {
    const mn = (await readline()).split(' ').map(val => parseInt(val));
    const m = mn[0];
    const n = mn[1];
    const arr = new Array(m).fill(0).map(()=>new Array(n).fill(0))
    for(let i=0;i<m;i++){
        arr[i] =  (await readline()).split(' ').map(val => parseInt(val));
    }
    const loc = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0]===1){
            loc.push([i, 0])
        } 
    }
    const result = []
    for (let i = 0; i < loc.length; i++) {
        const val = shortestPath(arr, loc[i]);
        result.push(val)
    }
    let ans = m*n;
    let num = 0;
    for(let i=0;i<result.length;i++){
        if(result[i]>0){
            ans = Math.min(ans, result[i])
        }else if(result[i]<0){
            num++;
        }
    }
    if(num === result.length){
        console.log(-1);
    }else{
        console.log(ans);
    }
    
})()