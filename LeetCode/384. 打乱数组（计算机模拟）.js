// 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是等可能的。
// 实现 Solution class:
// Solution(int[] nums) 使用整数数组 nums 初始化对象
// int[] reset() 重设数组到它的初始状态并返回
// int[] shuffle() 返回数组随机打乱后的结果
var Solution = function () {
    this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let temp = this.nums.concat()
    for (let i = 0; i < temp.length; i++) {
        let idx = Math.floor(Math.random() * (temp.length - i)) + i
        const tmp = temp[idx];
        temp[idx] = temp[i];
        temp[i] = tmp;
    }
    return temp
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */