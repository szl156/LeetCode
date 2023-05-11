/*
探险家小扣的行动轨迹，都将保存在记录仪中。expeditions[i] 表示小扣第 i 次探险记录，用一个字符串数组表示。其中的每个「营地」由大小写字母组成，通过子串 -> 连接。
例："Leet->code->Campsite"，表示到访了 "Leet"、"code"、"Campsite" 三个营地。
expeditions[0] 包含了初始小扣已知的所有营地；对于之后的第 i 次探险(即 expeditions[i] 且 i > 0)，如果记录中包含了之前均没出现的营地，则表示小扣 新发现 的营地。
请你找出小扣发现新营地最多且索引最小的那次探险，并返回对应的记录索引。如果所有探险记录都没有发现新的营地，返回 -1
*/
/**
 * @param {string[]} expeditions
 * @return {number}
 */
var adventureCamp = function (expeditions) {
    let spliter = '->', set, maxIndex = -1, max = -1
    if (!expeditions[0]) set = new Set()
    else set = new Set(expeditions[0].split(spliter))
    for (let i = 0; i < expeditions.length; i++) {
        if (!expeditions[i]) continue
        let arr = expeditions[i].split(spliter)
        let newCount = -1
        arr.map(string => {
            if (!set.has(string)) {
                newCount++
                set.add(string)
            }
        })
        if (newCount > max) {
            max = newCount
            maxIndex = i
        }
    }
    return maxIndex
};
let expeditions = ["leet->code", "leet->code->Campsite->Leet", "leet->code->leet->courier"] // 1
// let expeditions = ["Alice->Dex", "", "Dex"] // -1
console.log(adventureCamp(expeditions))