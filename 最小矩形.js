/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function (heights) {
//     const sList = []
//     for (let i = 0; i < heights.length; i++) {
//         let sLeft = 0
//         let sRight = 0
//         let s = 0
//         for (let left = i - 1; left >= 0; left--) {
//             if (heights[left] < heights[i]) break
//             sLeft += heights[i]
//         }
//         for (let right = i + 1; right < heights.length; right++) {
//             if (heights[right] < heights[i]) break
//             sRight += heights[i]
//         }
//         s = sLeft + sRight + heights[i]
//         sList.push(s)
//     }
//     return Math.max(...sList)
// };

var largestRectangleArea = function (heights) {
    let stack = [-1], max = 0
    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] > 1 && heights[stack[stack.length - 1]] > heights[i]) {
            let height = heights[stack.pop()]
            let width = i - 1 - stack[stack.length - 1]
            max = Math.max(max, height * width)
        }
        stack.push(i)
    }
    return max
};

heights = [2, 1, 5, 6, 2, 3]
console.log(largestRectangleArea(heights))
