/*
有一个整数数组nums，和一个查询数组requests，其中requests[i] = [starti, endi]。
第i个查询求nums[starti] + nums[starti + 1] + ... + nums[endi - 1] + nums[endi]的结果，starti 和endi数组索引都是 从 0 开始 的。
你可以任意排列 nums中的数字，请你返回所有查询结果之和的最大值。
由于答案可能会很大，请你将它对109 + 7取余后返回。
*/
/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function (nums, requests) {
    const n = nums.length
    const diff = new Array(n + 1).fill(0)
    for (const [start, end] of requests) {
        diff[start]++
        diff[end + 1]--
    }
    let c = 0
    for (let i = 0; i < n; i++) {
        c += diff[i]
        diff[i] = c
    }
    diff.pop()
    diff.sort((a, b) => b - a)
    nums.sort((a, b) => b - a)
    let ans = 0
    for (let i = 0; i < diff.length; i++) {
        ans += diff[i] * nums[i]
    }
    return ans % (1e9 + 7)
    /*let ans = 0
    const map = new Array(nums.length).fill(0)
    for (const request of requests) {
        for (let i = request[0]; i <= request[1]; i++) map[i]++
    }
    map.sort((a, b) => b - a)
    nums.sort((a, b) => b - a)
    for (let i = 0; i < map.length; i++) {
        ans += map[i] * nums[i]
    }
    return ans % (1e9 + 7)*/
};
let nums = [1, 2, 3, 4, 5], requests = [[1, 3], [0, 1]] // 19
// let nums = [1, 2, 3, 4, 5, 10], requests = [[0, 2], [1, 3], [1, 1]] //47
console.log(maxSumRangeQuery(nums, requests))