// 给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let sorts = []
    strs.forEach(str => sorts.push(str.split('').sort().toString()))
    let map = new Map()
    sorts.forEach((value, index) => {
        if (map.has(value)) map.get(value).push(strs[index])
        else map.set(value, [strs[index]])
    })
    return Array.from(map.values())
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs));