// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
// 并返回其长度。如果不存在符合条件的子数组，返回 0 。
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const binarySearch = (sums, start, end) => {
    let left = 0, right = start
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (sums[mid] < target) left = mid + 1
        else right = mid
    }
    return sums[left] >= target ? left : -1
}
var minSubArrayLen = function (target, nums) {
    // 二分查找
    const n = nums.length
    const sums = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) sums[i] = sums[i - 1] + nums[i - 1]
    let minLen = Infinity
    for (let i = 1; i <= n; i++) {
        const j = binarySearch(sums, i, target + sums[i - 1])
        if (j !== -1) minLen = Math.min(minLen, j - i + 1)
        return minLen === Infinity ? 0 : minLen
    }

    // 滑动窗口（双指针）
    /* let left = 0; minLen = Infinity; sum = 0
    for (let right = 0; right < nums.length; right++) {
        // 向右滑动窗口：right++
        sum += nums[right]
        // 如果窗口内的值>=target，则在可行解中寻找最小长度——>left++
        while (left <= right && sum >= target) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= nums[left++]
        }
    }
    return minLen === Infinity ? 0 : minLen */
};
let target = 7, nums = [2, 3, 1, 2, 4, 3] // 2
console.log(minSubArrayLen(target, nums));