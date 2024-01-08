let read = require('readline').createInterface({ input: process.stdin });
let iter = read[Symbol.asyncIterator]();
let readline = async () => (await iter.next()).value;
(async function () {
    let m = parseInt(await readline())
    let n = parseInt(await readline())
    let grid = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        let tmp = (await readline()).split(' ').map(val => parseInt(val))
        for (let j = 0; j < n; j++) {
            grid[i][j] = tmp[j]
        }

    }
    const left = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    const up = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    let maxBorder = 0;
    let ans = []
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (grid[i - 1][j - 1] === 1) {
                left[i][j] = left[i][j - 1] + 1;
                up[i][j] = up[i - 1][j] + 1;
                let border = Math.min(left[i][j], up[i][j]);
                while (left[i - border + 1][j] < border || up[i][j - border + 1] < border) {
                    border--;
                }
                maxBorder = Math.max(maxBorder, border);
                ans.push([i - 1, j - 1, maxBorder])
            }
        }
    }
    ans.sort((a, b) => {
        if (a[2] !== b[2]) return b[2] - a[2]
        if (a[0] !== b[0]) return a[0] - b[0]
        return a[1] - b[1]
    })
    console.log('[%s]', ans[0].join(','));
})()


