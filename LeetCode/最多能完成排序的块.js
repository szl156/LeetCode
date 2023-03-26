/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let count = 0
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 1; j <= arr.length; j++) {
            const arr1 = arr.slice(i, i + j)
            const arr2 = arr.slice(i + j, arr.length)
            if (Math.max(...arr1) < Math.min(...arr2)) {
                count++
                i = i + j
                j = 1
            }
        }
    }
    return count
};
arr = [1, 0, 2, 3, 4]
console.log(maxChunksToSorted(arr))