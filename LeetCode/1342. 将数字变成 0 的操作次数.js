/*
给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let step = 0
    while (num !== 0) {
        if ((num & 1) === 0) {
            num >>= 1
        } else {
            num--
        }
        step++
    }
    return step
};
let num = 14 // 6
console.log(numberOfSteps(num))