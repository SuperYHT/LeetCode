function bubbleSort(nums) {
    //使用冒泡排序
    for(let i=0;i<nums.length-1;i++){
        let exchange = true
        for(let j=nums.length-1;j>i;j--){
            if (nums[j]<nums[j-1]){
	          //交换
              [nums[j-1],nums[j]]= [nums[j],nums[j-1]]
              exchange = false
            }
        }
        if(exchange){
            break
        }
    }
    return nums
};

console.log(bubbleSort([2,1,5,3,6,4]))