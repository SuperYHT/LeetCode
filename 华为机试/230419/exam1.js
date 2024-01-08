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
    let len = Number(input[0])
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    let task = []
    for (let i = 1; i <= len; i++) {
        let range = input[i].split(' ').map(item => Number(item));
        let start = range[0]
        let end = range[1]
        max = Math.max(end, max)
        min = Math.min(start, min)
        task.push(range)
    }
    let time = new Array(max + 2).fill(0)
    let ans = 0
    let pre = 0
    for (let i = 0; i < task.length; i++) {
        time[task[i][0]]++
        time[task[i][1] + 1]--
    }
    for (let i = min; i <= max; i++) {
        pre += time[i]
        if (pre === 0) {
            ans += 1
        } else if (pre === 1) {
            ans += 3
        } else {
            ans += 4
        }
    }
    console.log(ans)
})




