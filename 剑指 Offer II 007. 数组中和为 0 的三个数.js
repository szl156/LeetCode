// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k 
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return [];
    // 排序
    nums.sort((a, b) => a - b);
    var target = 0;
    var len = nums.length;
    var i, results = [];
    for (i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] > target) {
            break;
        }
        if (nums[i] + nums[len - 2] + nums[len - 1] < target) {
            continue;
        }
        var left = i + 1, right = len - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                results.push([nums[i], nums[left], nums[right]]);
                left++; right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            }
        }
    }
    return results;
};
let nums = [-1, 0, 1, 2, -1, -4] //[[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums));