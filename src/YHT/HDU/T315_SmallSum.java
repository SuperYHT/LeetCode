package YHT.HDU;

import java.util.ArrayList;
import java.util.List;

import static jdk.nashorn.internal.objects.Global.print;

public class T315_SmallSum {
    private static int[] ans;
    public static List<Integer> countSmaller(int[] nums) {
        List<Integer> result = new ArrayList<Integer>();
        ans = new int[nums.length];
        process(nums,0,nums.length-1);
        for (int j:ans){
            result.add(j);
        }
        return result;
    }
    public static void process(int[]nums,int l, int r){
        if(l==r)
            return;
        int mid = l+((r-l)>>1);
        process(nums,l,mid);
        process(nums,mid+1,r);
        merge(nums, mid, l, r);
    }
    public static void merge(int[] nums, int mid,int l, int r){
        int[]temp =new int[r-l+1];
        int i = 0;
        //左数组指针
        int p = l;
        //右数组指针
        int q = mid + 1;
        while (p <= mid && q<=r){
            int count = 0;
            if(nums[p]<=nums[q]){
                temp[i++] = nums[p++];
            }else {
                count = r - q + 1;
                temp[i++] = nums[q++];
                ans[p] += count;
            }
        }
        while (p <= mid){
            temp[i++] = nums[p++];
        }
        while (q <= r){
            temp[i++] = nums[q++];
        }
        for (i = 0; i<temp.length; i++)
            nums[l+i] = temp[i];
    }

    public static void main(String[] args) {
        int [] nums = {5,2,6,1};
        List<Integer> result = countSmaller(nums);
        System.out.println(result);
    }
}
