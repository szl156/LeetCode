/**
 * @param {string} s
 * @return {string[]}
 */
let letterCasePermutation = function (s) {
    const ans = [], n = s.length;

    function dfs(i, tmp) {
        if (i === n) return ans.push(tmp);
        if (isNaN(s[i])) {
            dfs(i + 1, tmp + s[i].toLowerCase());
            dfs(i + 1, tmp + s[i].toUpperCase());
        } else {
            dfs(i + 1, tmp + s[i])
        }
    }

    dfs(0, '');
    return ans;
}
const s = "a1b2"
console.time()
console.log(letterCasePermutation(s))
console.timeEnd()
