package YHT.HDU;

import java.util.HashMap;
import java.util.Map;

public class T1 {

    public static void main(String[] args) {
	// write your code here

    }
    public int[] twoSum(int[] nums, int target) {
        Map m =new HashMap();
        for(int i=0 ;i< nums.length;i++){
            m.put(nums[i] ,i);
        }
        for(int i=0 ;i< nums.length;i++){
            if (m.get(target-nums[i])!=null){
                return new int[]{i, (int) m.get(target-nums[i])};
            }
        }
        return  new int[]{0,0};
    }
}
