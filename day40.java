public class day40 {
    public static int maxProfit(int[] prices, int fee) {
        int n = prices.length;
        if (n <= 1) {
            return 0;
        }

        int[] buy = new int[n];
        int[] sell = new int[n];

        buy[0] = -prices[0] - fee;
        sell[0] = 0;

        for (int i = 1; i < n; i++) {
            // Update buy array
            buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i] - fee);

            // Update sell array
            sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
        }

        return sell[n - 1];
    }

    public static void main(String[] args) {
        int[] prices1 = {1, 3, 2, 8, 4, 9};
        int fee1 = 2;
        System.out.println(maxProfit(prices1, fee1)); // Output: 8

        int[] prices2 = {1, 3, 7, 5, 10, 3};
        int fee2 = 3;
        System.out.println(maxProfit(prices2, fee2)); // Output: 6
    }
}
