package YHT.HDU;

import java.util.ArrayList;
import java.util.List;

import static jdk.nashorn.internal.objects.Global.print;

public class T315_SmallSum {
    public static int[] ans;
    public static int[] index;
    public static int[] tempindex;
    public  static List<Integer> countSmaller(int[] nums) {
        List<Integer> result = new ArrayList<Integer>();
        ans = new int[nums.length];
        index = new int[nums.length];
        tempindex = new int[nums.length];
        for(int i=0;i<nums.length;i++){
            index[i] = i;
        }
        process(nums,0,nums.length-1);

        for (int j:ans){
            result.add(j);
        }
        return result;
    }
    public  static void process(int[]nums,int l, int r){
        if(l==r)
            return;
        int mid = l+((r-l)>>1);
        process(nums,l,mid);
        process(nums,mid+1,r);
        merge(nums, mid, l, r);
    }
    public  static void merge(int[] nums, int mid,int l, int r){
        int[]temp =new int[r-l+1];
        int i = 0;
        int x = l;
        //左数组指针
        int p = l;
        //右数组指针
        int q = mid + 1;
        int count = 0;
        while (p <= mid && q<=r){
            if(nums[p] <= nums[q]){
                tempindex[x] = index[p];
                count = q -mid -1 ;
                ans[index[p]] += count;
                temp[i++] = nums[p++];
                x++;
            }else {
                tempindex[x] = index[q];
                temp[i++] = nums[q++];
                x++;
            }
        }
        while (p <= mid){
            count = q -mid -1 ;
            tempindex[x] = index[p];
            ans[index[p]] += count;
            temp[i++] = nums[p++];
            x++;
        }
        while (q <= r){
            tempindex[x] = index[q];
            temp[i++] = nums[q++];
            x++;
        }
        for (i = 0; i<temp.length; i++){
            index[l+i] = tempindex[l+i];
            nums[l+i] = temp[i];
        }
    }
    public static void main(String[] args) {
        int [] nums = {5,2,6,1};
        List<Integer> result = countSmaller(nums);
        System.out.println(result);
    }
}
