/*LeetCode 121 – Best Time to Buy and Sell Stock

Given an array where prices[i] represents the stock price on the iᵗʰ day, find the maximum profit you can achieve by buying once and selling once.

If no profit can be made, return 0.

Example

Input:
[7,1,5,3,6,4]

Output:
5

Explanation:
Buy at 1 and sell at 6.
Maximum Profit = 5
*/

const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = function (prices) {
	let minBuyPrice = prices[0];
	let maxProfit = 0;
	for (let i = 1; i < prices.length; i++) {
		if (maxProfit < prices[i] - minBuyPrice) {
			maxProfit = prices[i] - minBuyPrice;
		} else {
			if (minBuyPrice > prices[i]) {
				minBuyPrice = prices[i];
			}
		}
	}
	return maxProfit;
};

const result = maxProfit(prices)
console.log(result);
