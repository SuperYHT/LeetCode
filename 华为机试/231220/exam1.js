let read = require('readline').createInterface({ input: process.stdin });
let iter = read[Symbol.asyncIterator]();
let readline = async () => (await iter.next()).value;
(async function () {
    let num = (await readline()).split(' ')
    let endurances = num.map((val,index) => [parseInt(val), index])
    endurances.sort((a,b)=> a[0]- b[0])
    let length = num.length
    let ansLow = [endurances[0][1],endurances[1][1], endurances[2][1]]
    let ansHigh = [endurances[length-3][1],endurances[length-2][1], endurances[length-1][1]]
    ansHigh.sort()
    ansLow.sort()
    console.log(ansHigh.join(' '))
    console.log(ansLow.join(' '))
})()