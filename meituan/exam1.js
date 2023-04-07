let n = readline();
const startLine = readline().split(' ');
const endLine = readline().split(' ');
const map = new Map();
let max = 0;
let maxCount = 0;

for(let i = 0; i < n; i++){
    for(let j = startLine[i]; j <= endLine[i]; j++){
        map.set(j, map.has(j) ? map.get(j) + 1 : 1);
    }
}
map.forEach((value, key) =>{
    console.log(key, value);
    if(max < value){
        max = value;
        maxCount = 0;
    }
    if(value === max){
        maxCount++;
    }
})
console.log('答案是：', max, maxCount);