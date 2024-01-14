let read = require('readline').createInterface({ input: process.stdin});
let iter = read[Symbol.asyncIterator]();
let readline = async () => (await iter.next()).value;
(async function () {
     let totalTaskNum =  parseInt(await readline())
     let taskQueue = []
     for(let i = 0; i < totalTaskNum; i++){
         let tmp = (await readline()).split(' ').map(val => parseInt(val))
         taskQueue.push(tmp)
     }
    taskQueue.sort((a,b)=>{
        if(a[1] !== b[1]) return b[1] - a[1]
        else if(a[2] !== b[2]) return a[2] - b[2]
        return a[0]-b[0]
    })
    let ans = taskQueue.map(task => task[0])
    console.log(ans.join(' '))
})()