// 1365.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let arr = [...nums]
    arr.sort((a, b) => a - b)
    const ans = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (nums[i] > arr[j]) {
                ans.push(j + 1);
                break
            } else if (j === 0) {
                ans.push(0)
            }
        }
    }
    return ans
};
// [2,0,4,0,4,3]
const nums = [5, 0, 10, 0, 10, 6]
console.log(smallerNumbersThanCurrent(nums))
