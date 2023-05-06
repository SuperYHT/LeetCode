let read = require('readline').createInterface({ input: process.stdin });
let iter = read[Symbol.asyncIterator]();
let readline = async () => (await iter.next()).value;
(async function () {
    let nodeNum = parseInt(await readline())
    let graph = new Map()
    let inDegree = new Array(nodeNum + 1).fill(0)
    let out = []
    let queue = []
    for (let i = 1; i <= nodeNum; i++) {
        let tmp = (await readline()).split(' ')
        if (tmp[0] === '0') {
            inDegree[i] = 0
            queue.push(i)
        } else {
            inDegree[i] = parseInt(tmp[0])
            //遍历依赖ID
            for (let j = 1; j < tmp.length; j++) {
                let key = parseInt(tmp[j])
                if (graph.has(key)) {
                    let list = graph.get(key)
                    list.push(i)
                    graph.set(key, list)
                } else {
                    graph.set(key, [i])
                }
            }
        }
    }

    const topSort = (graph) => {
        let ans = 0
        while (queue.length) {
            let size = queue.length
            ans++
            while (size--) {
                let node = queue.shift()
                out.push(node)
                let nexts = graph.get(node)
                if (nexts && nexts.length) {
                    for (let i = 0; i < nexts.length; i++) {
                        inDegree[nexts[i]] -= 1
                        if (inDegree[nexts[i]] === 0) {
                            queue.push(nexts[i])
                        }
                    }
                }
            }
        }
        return ans
    }
    let result = topSort(graph)
    if (out.length !== nodeNum) {
        console.log('-1')
    } else {
        console.log(result)
    }
})()





// let nodeNum = 5
// let graph = new Map()
// let inDegree = new Array(nodeNum + 1).fill(0)
// let out = []
// let queue = []
// let str = ['3 2 3 4',
//     '1 5',
//     '1 5',
//     '1 5',
//     '0']
// for (let i = 1; i <= nodeNum; i++) {
//     let tmp = str[i - 1]
//     if (tmp[0] === '0') {
//         inDegree[i] = 0
//         queue.push(i)
//     } else {
//         inDegree[i] = parseInt(tmp[0])
//         //遍历依赖ID
//         for (let j = 1; j < tmp.length; j++) {
//             let key = parseInt(tmp[j])
//             if (graph.has(key)) {
//                 let list = graph.get(key)
//                 list.push(i)
//                 graph.set(key, list)
//             } else {
//                 graph.set(key, [i])
//             }
//         }
//     }
// }

// const topSort = (graph) => {
//     let ans = 0
//     while (queue.length) {
//         let size = queue.length
//         ans++
//         while (size--) {
//             let node = queue.shift()
//             out.push(node)
//             let nexts = graph.get(node)
//             if (nexts && nexts.length) {
//                 for (let i = 0; i < nexts.length; i++) {
//                     inDegree[nexts[i]] -= 1
//                     if (inDegree[nexts[i]] === 0) {
//                         queue.push(nexts[i])
//                     }
//                 }
//             }

//         }
//     }
//     return ans
// }
// let result = topSort(graph)
// if (out.length !== nodeNum) {
//     console.log('-1')
// } else {
//     console.log(result)
// }