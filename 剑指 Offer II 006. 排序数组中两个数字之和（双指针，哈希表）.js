// 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // 双指针
    let slow = 0, fast = numbers.length - 1
    while (slow < fast) {
        let sum = numbers[slow] + numbers[fast]
        if (sum === target) return [slow, fast]
        else if (sum > target) fast--
        else slow++
    } return [-1, -1]

    // 哈希表
    // let map = new Map()
    // for (let i = 0; i < numbers.length; i++) {
    //     if (map.has(numbers[i])) return [map.get(numbers[i]), i]
    //     map.set(target - numbers[i], i)
    // }
    // 暴力
    /* for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j]
        }
    } */
};
let numbers = [2, 3, 4], target = 6
// let numbers = [1, 2, 4, 6, 10], target = 8
console.log(twoSum(numbers, target));