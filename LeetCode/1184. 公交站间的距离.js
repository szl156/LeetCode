// 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号
// 我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离
// 环线上的公交车都可以按顺时针和逆时针的方向行驶
// 返回乘客从出发点 start 到目的地 destination 之间的最短距离
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    // if (start > distance.length || destination > distance.length) return
    let innerDistance = start > destination ? distance.slice(destination, start) : distance.slice(start, destination)
    let outerDistance = start > destination ? distance.slice(0, destination).concat(distance.slice(start, distance.length)) : distance.slice(0, start).concat(distance.slice(destination, distance.length))
    let inner = 0, outer = 0
    innerDistance.forEach(v => inner += v)
    outerDistance.forEach(v => outer += v)
    return Math.min(inner, outer)
};
const distance = [3, 6, 7, 2, 9, 10, 7, 16, 11], start = 6, destination = 2
console.log(distanceBetweenBusStops(distance, start, destination))