/*
给定两个大小分别为 m 和 n 的正序（从小到大）数组nums1 和nums2。请你找出并返回这两个正序数组的 中位数 。
算法的时间复杂度应该为 O(log (m+n)) 。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a, b) => a - b)
    let mid = Math.floor(arr.length / 2)
    return (arr.length & 1) === 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid]
};
let nums1 = [1, 2], nums2 = [3, 4] //2.00000
console.log(findMedianSortedArrays(nums1, nums2))