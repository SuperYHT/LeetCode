let read = require('readline').createInterface({ input: process.stdin });
let iter = read[Symbol.asyncIterator]();
let readline = async () => (await iter.next()).value;
(async function () {
    let N = parseInt(await readline())
    let graph = new Map()
    let nodes = []
    let weight = new Array(N + 1).fill(0)
    for (let i = 0; i < N; i++) {
        let tmp = (await readline()).split(' ')
        let id = parseInt(tmp[0])
        let parentId = parseInt(tmp[1])
        let food = parseInt(tmp[2])
        nodes.push(id)
        if (parentId !== '-1'){
            if (graph.get(parentId)) {
                let nexts = graph.get(parentId)
                nexts.push(id)
                graph.set(parentId, nexts)
            } else {
                graph.set(parentId, [id])
            }
        }
        weight[id] = food
    }
    let ans = Number.MIN_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    const dfs = (node, curr) => {
        curr += weight[node]
        max = Math.max(max, curr)
        if (!graph.get(node)) {
            return 
        }
        let nexts = graph.get(node)
        for (let next of nexts) {
            dfs(next, curr)
        }
    }
    for (let i = 0; i < nodes.length; i++) {
        max = Number.MIN_SAFE_INTEGER
        dfs(nodes[i], 0)
        ans = Math.max(max, ans)
    }
    console.log(ans)
})()