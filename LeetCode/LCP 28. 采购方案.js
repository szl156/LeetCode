// 小力将 N 个零件的报价存于数组 nums。小力预算为 target，假定小力仅购买两个零件，
// 要求购买零件的花费不超过预算，请问他有多少种采购方案。
// 注意：答案需要以 1e9 + 7 (1000000007) 为底取模，如：计算初始结果为：1000000008，请返回 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function (nums, target) {
    nums.sort(((a, b) => a-b))
    
};
const nums = [2, 5, 3, 5], target = 6
console.log(purchasePlans(nums, target))
// 1
