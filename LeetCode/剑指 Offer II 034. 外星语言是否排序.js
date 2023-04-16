// 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。
// 给定一组用外星语书写的单词 words，以及其字母表的顺序 order
// 只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const orderMap = new Map();
    for (let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i);
    }
    for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i];
        const nextWord = words[i + 1];
        let j = 0;
        while (j < currentWord.length && j < nextWord.length) {
            if (orderMap.get(currentWord[j]) < orderMap.get(nextWord[j])) {
                break;
            } else if (orderMap.get(currentWord[j]) > orderMap.get(nextWord[j])) {
                return false;
            }
            j++;
        }
        if (j === nextWord.length && j < currentWord.length) {
            return false;
        }
    }
    return true;
}

let words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
console.log(isAlienSorted(words, order))
