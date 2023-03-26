// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集
// 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）
// 可以不考虑输出结果的顺序
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // 遍历
    const ans1 = []
    for (const item of nums1) {
        const idx = nums2.indexOf(item)
        if (idx !== -1) {
            nums2[idx] = false
            ans1.push(item)
        }
    }
    return ans1
    // 双指针
    let s1 = 0, s2 = 0, ans2 = []
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    while (s1 < nums1.length && s2 < nums2.length) {
        if (nums1[s1] === nums2[s2]) {
            ans2.push(nums1[s1])
            s1++
            s2++
        } else {
            nums1[s1] < nums2[s2] ? s1++ : s2++
        }
    }
    return ans2
};
let nums1 = [1, 2, 2, 1], nums2 = [2]
console.log(intersect(nums1, nums2));
// [2,2]
