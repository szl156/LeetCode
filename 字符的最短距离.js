/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    const n = s.length
    const ans = new Array(n).fill(0)
    for (let i = 0, idx = -n; i < n; i++) {
        if (s[i] === c) idx = i
        ans[i] = i - idx
    }
    for (let j = n - 1, idx = 2 * n; j >= 0; j--) {
        if (s[j] === c) idx = j
        ans[j] = Math.min(ans[j], idx - j)
    }
    return ans
};
const s = "baaa"
const c = "b"
console.time()
console.log(shortestToChar(s, c))
console.timeEnd()
// [0,1,2,3]
