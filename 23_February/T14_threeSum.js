var threeSum = function (nums) {
    let ans = []
    if (nums === null || nums.length < 3)
        return ans;
    nums.sort();
    for (let i = 0; i < nums.length - 3; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if (nums[i] === nums[i + 1])
            continue
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                ans.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else {
                left++
            }
        }
    }
    console.log(ans)
    return ans;
};
threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])


