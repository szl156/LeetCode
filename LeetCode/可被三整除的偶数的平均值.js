/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    const arr = []
    let sum = 0
    nums.map(v => {
        if (v % 6 === 0) {
            arr.push(v)
            sum += v
        }
    })
    let avg = Math.floor(sum / arr.length)
    if (!avg) return 0
    return avg
};
