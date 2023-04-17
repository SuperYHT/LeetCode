process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
    input += data;
    return;
});

process.stdin.on('end', () => {
    // input数组以字符串形式存储了所有输入内容。input[i]存储第i行的所有内容.
    input = input.split('\n');
    // 在这里开始编写你的代码
    const param0 = input[0].split(' ')
    const N = Number(param0[0])
    const X = Number(param0[1])
    const param1 = input[1].split(' ')
    // const url = { 0: 'from_cache', 1: 'from_internet'}
    const urlList = new Array()
    for (let m = 0; m < X; m++) {
        urlList.push(Number(param1[m]))
    }
    const Y = Number(input[2])
    const tls = new Map()
    for (let i = 0; i < Y; i++) {
        let tmp = input[3+i].split(' ')
        tls.set(Number(tmp[0]),Number(tmp[1]))
    }
    const cache = new Array()
    const set = new Set()
    function add(url){
        if(cache.length < N){
            cache.push([url, tls.get(url)|| 5])
            set.add(url)
        }else{
            if(set.has(url)){

            }else{
                cache.sort((a, b)=> a[1]-b[1])
                set.delete(cache[0][0])
                cache.shift()
                cache.push([url, tls.get(url)|| 5])
                set.add(url)
            }
        }
    }
    function TTL(){
        for(let i = 0 ;i < cache.length;i++){
            cache[i][1] -= 1
            let urlTTL= cache[i][1]
            if(urlTTL===0){
                set.delete(cache[i][0])
                cache.splice(i,1)
                i--
            }
        }
    }
    let result = new Array()
    for (let i = 0; i < X; i++) {
        TTL()
        if(set.has(urlList[i])){
            result.push('0')
           
        }else{
            result.push('1')
            add(urlList[i])
        }
     
    }
    let ans = ''
    for(let i=0;i<result.length-1;i++){
        ans += result[i]+' '
    }
    ans += result[result.length-1]
    console.log(ans)
})




const N = 10
const X = 15

const url = { 0: 'from_cache', 1: 'from_internet' }
const urlList = [11, 14, 10, 5, 8, 3, 8, 13, 12, 9, 12, 15, 15, 7, 7]
const Y = 8
const tls = new Map()
tls.set(11, 2)
tls.set(14, 11)
tls.set(10, 9)
tls.set(5, 7)
tls.set(8, 1)
tls.set(13, 10)
tls.set(9, 10)
tls.set(15, 8)



const cache = new Array()
const set = new Set()
function add(url){
    if(cache.length < N){
        cache.push([url, tls.get(url)|| 5])
        set.add(url)
    }else{
        if(set.has(url)){

        }else{
            cache.sort((a, b)=> a[1]-b[1])
            set.delete(cache[0][0])
            cache.shift()
            cache.push([url, tls.get(url)|| 5])
            set.add(url)
        }
    }
    return cache
}
function TTL(){
    for(let i = 0 ;i < cache.length;i++){
        cache[i][1]-= 1
        let urlTTL= cache[i][1]
        if(urlTTL===0){
            set.delete(cache[i][0])
            cache.splice(i,1)
            i--
        }
    }
    return cache
}
let result = new Array()
for (let i = 0; i < X; i++) {
    TTL()
    if(set.has(urlList[i])){
        result.push('0')
    }else{
        result.push('1')
        add(urlList[i])
    }
 
}
let ans = ''
for(let i=0;i<result.length-1;i++){
    ans += result[i]+' '
}
ans += result[result.length-1]
console.log(ans)