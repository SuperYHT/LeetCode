/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const swap=(num,l,r)=>{
        let tmp = num[r];
        num[r] = num[l];
        num[l] = tmp;
    }
    const partition = (num, l , r,index)=>{
        swap(num, l, index)
        const piovt = num[l];
        while(l<r){
            while(r>l&&num[r]<=piovt){
                r--;
            }
            num[l] = num[r]
            while(l<r&&num[l]>=piovt){
                l++;
            }
            num[r] = num[l]
        }
        num[l] = piovt;
        return l;
    }
    const quickSelcet = (num , k , l ,r)=>{
        const index = Math.floor(Math.random()*(r-l+1)+l);
        const s = partition(num, l, r,index)
        if(s === k){
            return num[k];
        }
        if(s <k){
            return quickSelcet(num, k, s+1,r);
        }else{
            return quickSelcet(num, k, l, s - 1);
        }
    }
    let ans = quickSelcet(nums , k-1 , 0 , nums.length-1);

    return ans;
};
