// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const n = strs.length;
    const ans = new Map();
    const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
    const mod = 1e9 + 7;
    for (let i = 0; i < n; i++) {
        let hash = 1;
        for (let j = 0; j < strs[i].length; j++) {
            let num = strs[i].charCodeAt(j) - 97;
            hash = ((hash % mod) * (prime[num] % mod)) % mod;
        }
        if (!ans.get(hash)) ans.set(hash, []);
        ans.get(hash).push(strs[i]);
    }
    return [...ans.values()];
};
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
// [["bat"],["nat","tan"],["ate","eat","tea"]]