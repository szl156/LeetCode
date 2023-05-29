/*
给你一个字符串 sentence 作为句子并指定检索词为 searchWord ，其中句子由若干用 单个空格 分隔的单词组成。请你检查检索词 searchWord 是否为句子 sentence 中任意单词的前缀。
如果searchWord 是某一个单词的前缀，则返回句子sentence 中该单词所对应的下标（下标从 1 开始）。如果 searchWord 是多个单词的前缀，则返回匹配的第一个单词的下标（最小下标）。
如果 searchWord 不是任何单词的前缀，则返回 -1 。
字符串 s 的 前缀 是 s 的任何前导连续子字符串。
*/
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    if (sentence.length < searchWord.length) return -1
    let words = sentence.split(' ')
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word.length < searchWord.length) continue
        for (let j = 0; j < searchWord.length; j++) {
            if (searchWord[j] !== word[j]) break
            if (j === searchWord.length - 1) return i + 1
        }
    }
    return -1
};
let sentence = "i love eating burger", searchWord = "burg" // 4
console.log(isPrefixOfWord(sentence, searchWord))