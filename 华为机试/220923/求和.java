import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n + 1];
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        if (sum % 2 != 0) {
            System.out.println(0);
        } else {
            int target = sum / 2;
            // 从[0,i]的数组中，选取元素和为j的方案
            int[][] dp = new int[n + 1][target + 1];
            dp[0][0] = 1;
            // i 表示 物品个数
            for (int i = 1; i <= n; i++) {
                // j表示背包大小
                for (int j = 1; j <= target; j++) {
                    // 如果我当前背包大小，小于我当前重量，那么肯定是前面i-1个值满足的个数
                    if (j < arr[i])
                        dp[i][j] = dp[i - 1][j];
                    // 当前重量恰好为背包重量，在原来基础上+1
                    else if (j == arr[i])
                        dp[i][j] = dp[i - 1][j] + 1;
                    // 如果背包很大，那么为j的个数为，前面i-1个满足的个数 + 我当前值与其他值满足的个数。
                    else
                        dp[i][j] = dp[i - 1][j - arr[i]] + dp[i - 1][j];
                }
            }
            System.out.println(dp[n][target]);
        }
    }
}