process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
    input += data;
    return;
});

process.stdin.on('end', () => {
    const arr = new Array()
    // input数组以字符串形式存储了所有输入内容。input[i]存储第i行的所有内容.
    input = input.split('\n');
    // 在这里开始编写你的代码
    let nodeNum = Number(input[0])
    let edgeNum = Number(input[1])
    let graph = new Map()
    let ans = []
    for (let i = 0; i < edgeNum; i++) {
        let edge = input[i + 2].split(' ').map(item => Number(item))
        let x = edge[0]
        let y = edge[1]
        if (!graph.has(x)) {
            graph.set(x, [y])
        } else {
            let list = graph.get(x)
            list.push(y)
            list.sort((a, b) => a - b)
            graph.set(x, list)
        }
    }
    let blockNode = new Set()
    let blockNum = Number(input[edgeNum + 2])
    for (let i = 0; i < blockNum; i++) {
        blockNode.add(Number(input[edgeNum + 3 + i]))
    }
    let flag = false
    let min = Number.MAX_SAFE_INTEGER
    const dfs = (node, path) => {
        if (blockNode.has(node)) {
            return null
        }
        if (!graph.get(node)) {
            ans.push(path)
            min = Math.min(min, path.length)
            flag = true
            return
        }
        let list = graph.get(node)

        for (let n of list) {
            if (path.indexOf(n) === -1) {
                path.push(n)
                dfs(n, [...path])
                path.pop()
            }
        }
    }
    dfs(0, [0])
    if (flag) {
        let reuslt = ans[0]
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].length === min) {
                reuslt = ans[i]
                break
            }
        }
        let str = ''
        for (let i = 0; i < reuslt.length; i++) {
            if (i === reuslt.length - 1) {
                str += reuslt[i]
            } else {
                str += reuslt[i] + '->'
            }
        }
        console.log(str)
    } else {
        console.log('NULL')
    }
    // const bfs = (node)=>{

    // }
})


let read = require('readline').createInterface({ input: process.stdin});
let iter = read[Symbol.asyncIterator]();
let readline = async () => (await iter.next()).value;
(async function () {
    let nodeNum = parseInt(await readline())
    let edgeNum = Number(await readline())
    let graph = new Map()
    let ans = []
    for (let i = 0; i < edgeNum; i++) {
        let tmp = await readline()
        let edge = tmp.split(' ').map(item => Number(item))
        let x = edge[0]
        let y = edge[1]
        if (!graph.has(x)) {
            graph.set(x, [y])
        } else {
            let list = graph.get(x)
            list.push(y)
            graph.set(x, list)
        }
    }
    let blockNode = new Set()
    let blockNum = parseInt(await readline())
    for (let i = 0; i < blockNum; i++) {
        let tmp = await readline()
        blockNode.add(parseInt(tmp))
    }
    let flag = false
    let min = Number.MAX_SAFE_INTEGER
    const dfs = (node, path) => {
        if (blockNode.has(node)) {
            return
        }
        if (!graph.get(node)) {
            ans.push(path)
            min = Math.min(min, path.length)
            flag = true
            return
        }
        let list = graph.get(node)
        list.sort((a, b) => a - b)
        for (let n of list) {
            if (path.indexOf(n) === -1) {
                path.push(n)
                dfs(n, [...path])
                path.pop()
            }
        }
    }
    dfs(0, [0])
    if (flag) {
        let reuslt = ans[0]
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].length === min) {
                reuslt = ans[i]
                break
            }
        }
        let str = ''
        for (let i = 0; i < reuslt.length; i++) {
            if (i === reuslt.length - 1) {
                str += reuslt[i]
            } else {
                str += reuslt[i] + '->'
            }
        }
        console.log(str)
    } else {
        console.log('NULL')
    }
})()

let nodeNum = 7
let edgeNum = 6
let graph = new Map()
let ans = []
let edgeNumList = ['0 1', '0 3', '1 2', '3 4', '1 5', '5 6']
let blockList = ['4']
for (let i = 0; i < edgeNumList.length; i++) {
    let edge = edgeNumList[i].split(' ').map(item => Number(item))
    let x = edge[0]
    let y = edge[1]
    if (!graph.has(x)) {
        graph.set(x, [y])
    } else {
        let list = graph.get(x)
        list.push(y)
        graph.set(x, list)
    }
}
let blockNode = new Set()
for (let i = 0; i < blockList.length; i++) {
    blockNode.add(Number(blockList[i]))
}
let flag = false
let min = Number.MAX_SAFE_INTEGER
const dfs = (node, path) => {
    if (blockNode.has(node)) {
        return
    }
    if (!graph.has(node)) {
        ans.push(path)
        min = Math.min(min, path.length)
        flag = true
        return
    }
    let list = graph.get(node)
    list.sort((a, b) => a - b)
    for (let n of list) {
        if (path.indexOf(n) === -1) {
            path.push(n)
            dfs(n, [...path])
            path.pop()
        }
    }
}
dfs(0, [0])
if (flag) {
    let reuslt = ans[0]
    for (let i = 0; i < ans.length; i++) {
        if (ans[i].length === min) {
            reuslt = ans[i]
            break
        }
    }
    let str = ''
    for (let i = 0; i < reuslt.length; i++) {
        if (i === reuslt.length - 1) {
            str += reuslt[i]
        } else {
            str += reuslt[i] + '->'
        }
    }
    console.log(str)
} else {
    console.log('NULL')
}
const bfs = (node) => {

}