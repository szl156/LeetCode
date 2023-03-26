// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // ES6
    nums1.splice(m, nums1.length - m) // 删除nums1多余元素
    /**
     * Object.assignt(target,...sources)
     * target: 目标对象   sources: 源对象，包含被合并的属性
     * 将sources的可枚举和自身属性拷贝到target对象上
     */
    Object.assign(nums1, [...nums1, ...nums2].sort((a, b) => a - b))

    // 多指针
    let i = m - 1, j = n - 1, k = m + n - 1
    while (i >= 0 || j >= 0) {
        if (i < 0) nums1[k--] = nums2[j--]
        else if (j < 0) nums1[k--] = nums1[i--]
        else if (nums1[i] < nums2[j]) nums1[k--] = nums2[j--]
        else nums1[k--] = nums1[i--]
    }

    // 暴力破解
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m]
    }
    nums1.sort((a, b) => a - b)
};
const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
merge(nums1, m, nums2, n)
console.log(nums1)
// [1,2,2,3,5,6]