// function quickSort(arr, start, end) {
//     if (start > end) return;
//     let left = start,right = end;
//     let base = arr[start]; //存放基准数
//     while (left != right) {
//         // 从右边开始，找第一个小于基准的位置
//         while (arr[right] >= base && left < right) right--; //注意从右边开始
//         // 从左边开始，找第一个大于基准的位置
//         while (arr[left] <= base && left<right) left++;
//         // 交换两个数
//         if (left<right) {
//             [arr[left],arr[right]]=[arr[right],arr[left]] 
//         }
//     }
//     // 最后把基准数归位
//      [arr[left],arr[start]] = [arr[start],arr[left]];
//     // 递归处理左边
//     quickSort(arr, start, left - 1);
//     // 递归处理右边
//     quickSort(arr, left + 1, end);
//     return arr
// }



function quickSort(arr, start, end){
    if(start>end) return
    let left = start,right = end 
    let base = arr[start]
    while(left!==right){
        while(arr[right]>=base && left<right) right--
        while(arr[left]<=base && left<right) left++
        if(left<right){
            [arr[left],arr[right]] = [arr[right], arr[left]]
        }
    }
    [arr[left], arr[start]] = [arr[start], arr[left]]
    quickSort(arr, start,left-1)
    quickSort(arr, left+1,end)
    return arr
}

let arr = [6, 1, 2, 3,7, 10, 9];
console.log(quickSort(arr, 0, arr.length - 1));


