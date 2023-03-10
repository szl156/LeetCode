// 1328
// /**
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) return '';
    let a = palindrome.split('');
    let l = 0, r = a.length - 1;
    while (l < r && a[l] === 'a') {
        l++;
        r--;
    }
    if (l < r) {
        a[l] = 'a';
        return a.join('');
    }
    a[a.length - 1] = 'b';
    return a.join('');
};
const palindrome = "abccba"
console.log(breakPalindrome(palindrome))
