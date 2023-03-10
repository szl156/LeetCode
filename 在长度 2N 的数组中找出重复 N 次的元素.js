/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = function (nums) {
    // 哈希表
    /*const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
        if (map.get(nums[i]) === (nums.length / 2)) return nums[i]
    }*/

    // 随机选择
    const n = nums.length;
    while (true) {
        const x = Math.floor(Math.random() * n), y = Math.floor(Math.random() * n);
        if (x !== y && nums[x] === nums[y]) {
            return nums[x];
        }
    }
};
const nums = [5, 1, 5, 2, 5, 3, 5, 4]
console.log(repeatedNTimes(nums))
