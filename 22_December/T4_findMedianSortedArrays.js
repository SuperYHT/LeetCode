// 双指针做法   O(m+n)
// 难点在于边界条件与奇偶数的判断  这里使用left和right解决
var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length;
    let left = NaN;
    let right = NaN;
    let start1 = 0; 
    let start2 = 0;
    for(let i = 0; i <= len/2 ; i++){
        left = right;
        if(start1<nums1.length && (start2 >= nums2.length || nums1[start1] < nums2[start2])){
            right = nums1[start1++]; 
        }else{
            right = nums2[start2++];
        }
    }
    if(len %2 ===0){
        return (left+right)/2;
    }else{
        return right;
    }
};


//二分查找  O(log(m+n))


