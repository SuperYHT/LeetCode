var search = function(nums, target) {
    let l = 0;
    let r = nums.length-1;
    const kSearch = (nums, left, right)=>{
        let mid = ((right-left)>>1 )+ left;
        let k = mid;
        if(left>=right){
            return left;
        }
        if(nums[left] < nums[mid]){
            k = kSearch(nums, mid, right)
        }else {
            k = kSearch(nums, left, mid)
        }
        return k;
    }
    const binarySearch = (nums, left, right, target)=>{
        let mid = ((right-left)>>1) + left;
        let flag = -1;
        if(nums[mid] === target){
            flag = mid;
            return flag;
        }
        if(left > right){
            return -1;
        }
        if(target< nums[mid]){
            flag = binarySearch(nums, left, mid-1, target);
        }else if(target> nums[mid]){
            flag = binarySearch(nums, mid + 1, right, target);
        }
        return flag;
    }
    let k = kSearch(nums, l, r);
    let p = binarySearch(nums, l, k, target)
    let q = binarySearch(nums, k+1, r, target)
    console.log(k,p,q);
    if(p<0 && q<0){
           return -1;
    }else if(p<0 && q>0){
        return q;
    }else{
        return p;
    }
};
// search([1],0)
search([9,1,2,3,4,5,6,7,8],9)


