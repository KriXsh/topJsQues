function coinChange(coins, amount) {
    // Create DP array
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 coins needed to make amount 0

    // Iterate over all amounts from 1 to 'amount'
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    // If the value at dp[amount] is Infinity, return -1 (amount is not reachable)
    return dp[amount] === Infinity ? -1 : dp[amount];
}


const coins = [1, 2, 5], amount = 11
console.log(coinChange(coins,amount ))