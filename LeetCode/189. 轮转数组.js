// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let arr = [...nums]
    for (let i = 0; i < nums.length; i++) {
        nums[(i + k) % nums.length] = arr[i]
    }
    /* const arr = nums.flat(0)
    for (let i = 0; i < arr.length; i++) {
        nums[(i + k) % arr.length] = arr[i]
    }
    // [...nums.slice(0,-k),...nums.slice(-k)].forEach((v,idx)=>nums[idx] =v) */
};
const nums = [1, 2, 3, 4, 5, 6, 7], k = 3
rotate(nums, k)
console.log(nums)
// [5,6,7,1,2,3,4]