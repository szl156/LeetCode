/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function (staple, drinks, x) {
    // 查询数组的长度
    const arrLength = x + 1
    // 查询数组
    const arr = new Array(arrLength).fill(0)
    const stapleLength = staple.length
    const drinksLength = drinks.length
    let result = 0
    // 遍历食物价格，将 x 范围内的食物的价格作为 arr 的下标，然后 arr 中对应的值 +1
    for (let i = 0; i < stapleLength; i++) {
        if (staple[i] <= x) {
            arr[staple[i]]++
        }
    }
    // 将 arr 数组中，当前值都加上前一个元素的值，这样使用任意的 key 查找，都可以查找到前面所有元素值的和
    for (let j = 1; j < arrLength; j++) {
        arr[j] += arr[j - 1]
    }
    // 遍历饮料价格，将 x 减饮料的价格，则得到的就是食物的最大价格
    // 用食物的最大价格去查 arr，可以得到当前饮料能组合的食物的个数
    for (let j = 0; j < drinksLength; j++) {
        if (drinks[j] <= x) {
            result += arr[x - drinks[j]]
        }
    }
    return result % 1000000007
};

const staple = [10, 20, 5], drinks = [5, 5, 2], x = 15
console.log(breakfastNumber(staple, drinks, x))
