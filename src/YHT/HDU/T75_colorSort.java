package YHT.HDU;

public class T75_colorSort {
    public void sortColors(int[] nums) {
        if(nums.length==1)
            return;
        if (nums.length==2)
            if (nums[0]>nums[1])
                swap(nums,0,1);
        int L=-1,index = 0;
        int R = nums.length;
        while (index < R){
            if (nums[index] < 1){
                L++;
                swap(nums,L,index);
                index++;
            }else if (nums[index] > 1) {
                R--;
                swap(nums, R, index);
            }else if(nums[index]==1)
                index++;
        }

    }
    public void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}
