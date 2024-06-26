/* 每一回合，你可以从两端之一拿起一枚石子（位置最大或最小），并将其放入两端之间的任一空闲位置。
形式上，假设这三枚石子当前分别位于位置 x, y, z 且 x < y < z。那么就可以从位置 x 或者是位置 z 拿起一枚石子，并将该石子移动到某一整数位置 k 处，其中 x < k < z 且 k != y。
当你无法进行任何移动时，即，这些石子的位置连续时，游戏结束。 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
  let arr = [a, b, c];
  arr.sort((a, b) => a - b);
  let max = arr[2] - arr[0] - 2;
  let min =
    arr[0] + 1 === arr[1] && arr[1] + 1 === arr[2]
      ? 0
      : arr[1] - arr[0] === 2 ||
        arr[2] - arr[1] === 2 ||
        arr[0] + 1 === arr[1] ||
        arr[1] + 1 === arr[2]
      ? 1
      : 2;
  return [min, max];
};

const a = 3,
  b = 5,
  c = 1;
console.log(numMovesStones(a, b, c)); // [1, 2]
