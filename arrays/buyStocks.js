/*
Best Time to Buy and Sell Stock:

Problem: Given an array where the i-th element is the price of a stock on day i, find the maximum profit you can achieve by buying and selling once.
Example: Given [7, 1, 5, 3, 6, 4], the maximum profit is 5 (buy on day 2 at price 1 and sell on day 5 at price 6).

*/


function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

