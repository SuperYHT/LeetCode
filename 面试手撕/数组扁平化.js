//递归实现
let arr = [1, [2, [3, 4, 5]]];
let arr_3 = [[1,[2, 2, 2],3],[4,5,6],[7,8,9]]
function flatten(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten(arr_3));


// let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten(arr));
console.log(flatten(arr_3));