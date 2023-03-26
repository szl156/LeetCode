// 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。
// 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。
// 给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    pairs.sort((a, b) => a[1] - b[1])
    let beforeB = -Number.MAX_VALUE, count = 1
    // pairs.forEach(v => {
    //     if (v[0] > beforeB) {
    //         beforeB = v[1]
    //         count++
    //     }
    // })
    for (const p of pairs) {
        if (beforeB < p[0]) {
            beforeB = p[1]
            count++
        }
    }
    return count
};
const pairs = [[-6, 9], [1, 6], [8, 10], [-1, 4], [-6, -2], [-9, 8], [-5, 3], [0, 3]]
console.time()
console.log(findLongestChain(pairs))
console.timeEnd()
