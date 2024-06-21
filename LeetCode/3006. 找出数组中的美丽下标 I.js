/* 给你一个下标从 0 开始的字符串 s 、字符串 a 、字符串 b 和一个整数 k 。
如果下标 i 满足以下条件，则认为它是一个 美丽下标：
0 <= i <= s.length - a.length
s[i..(i + a.length - 1)] == a
存在下标 j 使得：
0 <= j <= s.length - b.length
s[j..(j + b.length - 1)] == b
|j - i| <= k
以数组形式按 从小到大排序 返回美丽下标。 */
/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  const getMatchList = (s, a) => {
    let matchAIndex = [];
    for (let start = 0; start <= s.length - a.length; start++) {
      const i = s.indexOf(a, start);
      if (i !== -1) {
        matchAIndex.push(i);
        start = i;
      } else break;
    }
    return matchAIndex;
  };
  const ans = [];
  const matchAList = getMatchList(s, a);
  const matchBList = getMatchList(s, b);
  for (let i = 0; i < matchAList.length; i++) {
    if (matchBList.some((b) => Math.abs(matchAList[i] - b) <= k))
      ans.push(matchAList[i]);
  }
  return ans;
};
const s = "isawsquirrelnearmysquirrelhouseohmy",
  a = "my",
  b = "squirrel",
  k = 15;
/* const s = "jqcdc",
  a = "c",
  b = "d",
  k = 2; */
console.log(beautifulIndices(s, a, b, k)); // [16,33]
