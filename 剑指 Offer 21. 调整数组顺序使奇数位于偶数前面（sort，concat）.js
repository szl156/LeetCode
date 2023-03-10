// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    // sort
    return nums.sort((a, b) => b % 2 - a % 2)

    // concat
    /*let odds = []
    let even = []
    for(let i=0;i<nums.length;i++){
        nums[i]&1?odds.push(nums[i]):even.push(nums[i])
    }
    return odds.concat(even)*/

    // 暴力解法
    /*let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & 1) arr.push(nums[i]); else arr.unshift(nums[i])
    }
    return arr*/
};
let nums = [1, 2, 3, 4]
console.log(exchange(nums))