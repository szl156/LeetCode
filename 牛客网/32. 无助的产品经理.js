/*
在某厂，产品经理同学的工作职责除了给开发同学提需求，还有一件极其重要的事：对产品运营数据做归因分析。
某天，该产品经理同学接到老板要求：根据在过去一段时间内产品的“每日活跃用户数”，统计出最长的增长总天数，
也就是把保持增长势头（可以不连续）的天数抽出来，你可能会得到多个新序列，计算最长的那个序列的总天数。
我们把该产品自上线以来“每日的活跃用户数”，都按照顺序放入一个数组，比如：
[1,5,122,34,45,232,342,34]，以这组数据为例，把其中所有的增长子序列罗列出来：
形成了
第一个子序列：[1,5,122]
第二个子序列：[34,45,232,342]
第三个子序列：[1,5,122,232,342]
第四个子序列：[1,5,34,45,232,342]
这四个序列，其中最长的是第四个，所以这个例子中，最长的增长总天数是：6
*/
var lengthOfLIS = function (nums) {
    let dp = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
    }
    return Math.max(...dp)
};

let nums = [10, 9, 2, 5, 3, 6, 101, 18] // 4
// let nums = [1, 5, 122, 34, 45, 232, 342, 34] // 6
console.log(lengthOfLIS(nums))