// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[nums.length - 1];

    for (let i = 0; i < nums.length - 2; i++) {
        const n1 = nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const n2 = nums[l];
            const n3 = nums[r];
            const sum = n1 + n2 + n3;
            if (sum > target) {
                r--;
            } else {
                l++;
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            }
        }
    }
    return res;

};

const nums = [-1, 2, 1, -4], target = 1

console.log(threeSumClosest(nums, target))
