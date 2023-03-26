// 「力扣挑战赛」心算项目的挑战比赛中，要求选手从 N 张卡牌中选出 cnt 张卡牌，
// 若这 cnt 张卡牌数字总和为偶数，则选手成绩「有效」且得分为 cnt 张卡牌数字总和。
// 给定数组 cards 和 cnt，其中 cards[i] 表示第 i 张卡牌上的数字。 请帮参赛选手计算最大的有效得分。
// 若不存在获取有效得分的卡牌方案，则返回 0。
/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function (cards, cnt) {
    let odd = [0];
    let even = [0];
    cards.sort((a, b) => b - a);
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] % 2) {
            odd.push(odd[odd.length - 1] + cards[i]);
        } else {
            even.push(even[even.length - 1] + cards[i]);
        }
    }
    let ans = 0;
    for (let k = 0; k < odd.length; k += 2) {
        if (0 <= cnt - k && cnt - k < even.length) {
            ans = Math.max(ans, odd[k] + even[cnt - k]);
        }
    }
    return ans;
};
const cards = [9, 5, 9, 1, 6, 10, 3, 4, 5, 1], cnt = 2
console.log(maxmiumScore(cards, cnt))
