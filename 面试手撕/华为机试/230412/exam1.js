let read = require('readline').createInterface({ input: process.stdin });
let iter = read[Symbol.asyncIterator]();
let readline = async () => (await iter.next()).value;
(async function () {
    let nodeNum = parseInt(await readline())
    
})()

