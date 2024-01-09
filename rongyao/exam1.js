function getNum(arr, target){
    const set = new Set(arr);
    arr = arr.sort((a, b)=> a-b)
    for(let val of arr){
        const minus = target - val;
        if(set.has(minus)&& val< minus){
            console.log(`1 ${val} ${minus}`)
            return;
        }
    }
    console.log(`0 0 0`)
}

getNum([11,4,15,7,1,2], 6)
