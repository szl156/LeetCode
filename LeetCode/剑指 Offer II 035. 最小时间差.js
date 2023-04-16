// 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let minutes = timePoints.map(time => {
        const [hour, minute] = time.split(':')
        return parseInt(hour) * 60 + parseInt(minute)
    }).sort((a, b) => a - b)
    let res = Infinity
    for (let i = 0; i < minutes.length - 1; i++) {
        let diff = minutes[i + 1] - minutes[i]
        res = Math.min(res, diff)
    }
    res = Math.min(res, 1440 - (minutes[minutes.length - 1] - minutes[0]))
    return res
};
let timePoints = ["23:59", "00:00"] // 1
// let timePoints = ["00:00","23:59","00:00"] // 0
console.log(findMinDifference(timePoints))