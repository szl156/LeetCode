/* 给定 N 个无限容量且初始均空的水缸，每个水缸配有一个水桶用来打水，第 i 个水缸配备的水桶容量记作 bucket[i]。小扣有以下两种操作：
升级水桶：选择任意一个水桶，使其容量增加为 bucket[i]+1
蓄水：将全部水桶接满水，倒入各自对应的水缸
每个水缸对应最低蓄水量记作 vat[i]，返回小扣至少需要多少次操作可以完成所有水缸蓄水要求。
注意：实际蓄水量 达到或超过 最低蓄水量，即完成蓄水要求。 */
/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function (bucket, vat) {
  let max = Math.max(...vat);
  if (max === 0) {
    return 0;
  }
  // 求蓄水次数为op时的总操作数
  let ops = (op) => {
    let upgrades = 0;
    for (let i = 0; i < vat.length; i++) {
      // 桶需要升级的次数
      upgrades += Math.max(0, Math.ceil(vat[i] / op) - bucket[i]);
    }
    return upgrades + op;
  };
  // 遍历蓄水次数，求总操作次数的最小值
  // 当op大于minOp时，ops(op)必定大于minOp，故可用minOp作为循环结束点
  let minOp = Infinity;
  let op = 0;
  while (op < minOp) {
    op++;
    minOp = Math.min(minOp, ops(op));
  }
  return minOp;
};
let bucket = [0],
  vat = [1];
console.log(storeWater(bucket, vat));
