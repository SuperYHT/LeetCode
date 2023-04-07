let nums = [1, 2, 3, 4, 5]
let target = 4
const binarySearch = (l , r)=>{
    if(l>r){
        return -1;
    }
    let result = -1
    let mid = ((r-l)>>1)+l;
    if(nums[mid]===target){
        return mid;
    }
    if(target>nums[mid]){
       result = binarySearch(mid+1,r);
    }else{
        result = binarySearch(l,mid-1)
    }
    return result
}

let n = binarySearch(0,4)
console.log(n)