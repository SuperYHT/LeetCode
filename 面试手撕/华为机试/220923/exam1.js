// let len = 5
// const arr = [-1, -1, 1, 2, 3]
// let len = parseInt(readline())
// const arr = new Array()
// while (len--) {
//     arr.push(parseInt(readline()))
// }

// const map = new Map()
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === -1) {
//         map.set(i, null)
//     } else {
//         map.set(i, arr[i])
//     }
// }
// let sortArr = new Array()
// for (let i = 0; i < arr.length; i++) {
//     sortArr.push([i, 0])
// }
// for (let i = 0; i < arr.length; i++) {
//     let tmp = i
//     while (tmp > -1 && tmp !== null) {
//         tmp = map.get(tmp)
//         if (tmp > -1 && tmp !== null) {
//             sortArr[tmp][1]++
//         }
//     }
// }
// sortArr.sort((a, b) => {
//     if (b[1] - a[1] === 0) {
//         return a[0] - b[0]
//     } else {
//         return b[1] - a[1]
//     }
// })

// let ans = []

// for (let i = 0; i < sortArr.length; i++) {
//     ans.push(sortArr[i][0])
// }
// console.log(ans)




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
    let arrStr = input[1].split(' ');
    for (let i = 0; i < arrStr.length; i++)
        arr.push(Number(arrStr[i]))
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            map.set(i, null)
        } else {
            map.set(i, arr[i])
        }
    }
    let sortArr = new Array()
    for (let i = 0; i < arr.length; i++) {
        sortArr.push([i, 0])
    }
    for (let i = 0; i < arr.length; i++) {
        let tmp = i
        while (tmp > -1 && tmp !== null) {
            tmp = map.get(tmp)
            if (tmp > -1 && tmp !== null) {
                sortArr[tmp][1]++
            }
        }
    }
    sortArr.sort((a, b) => {
        if (b[1] - a[1] === 0) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    })

    let ans = ''

    for (let i = 0; i < sortArr.length-1; i++) {
        ans += sortArr[i][0]+' '
       
    }
    ans += sortArr[sortArr.length-1][0]
    console.log(ans)
})



