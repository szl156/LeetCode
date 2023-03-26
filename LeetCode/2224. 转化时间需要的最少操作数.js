// 给你两个字符串 current 和 correct ，表示两个 24 小时制时间
// 24 小时制时间 按 "HH:MM" 进行格式化，其中 HH 在 00 和 23 之间
// 而 MM 在 00 和 59 之间。最早的 24 小时制时间为 00:00 ，最晚的是 23:59
// 在一步操作中，你可以将 current 这个时间增加 1、5、15 或 60 分钟。你可以执行这一操作 任意 次数
// 返回将 current 转化为 correct 需要的 最少操作数
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    const time1 = current.slice(0, 2) * 60 + current.slice(3) * 1
    const time2 = correct.slice(0, 2) * 60 + correct.slice(3) * 1
    let targetTime = time2 - time1
    if (targetTime < 0) targetTime += 1440
    let n = 0
    n += ~~(targetTime / 60)
    targetTime %= 60
    n += ~~(targetTime / 15)
    targetTime %= 15
    n += ~~(targetTime / 5)
    targetTime %= 5
    return n += targetTime
};

const current = "02:30", correct = "04:35"
console.log(convertTime(current, correct))