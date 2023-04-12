//方法一 使用set
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]


//方法二 双重循环+splice

function removeDuplicate(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          len-- // 减少循环次数提高性能
          j-- // 保证j的值自加后不变
        }
      }
    }
    return arr
  }
  
  const result1 = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN, NaN ]


//方法三 使用includes或者indexOf
  function removeDuplicate(arr) {
    const newArr = []
    arr.forEach(item => {
      if (!newArr.includes(item)) {
        newArr.push(item)
      }
    })
    return newArr
  }
  
  const result2 = removeDuplicate(arr)
  console.log(result) // [ 1, 2, 'abc', true, false, undefined, NaN ]