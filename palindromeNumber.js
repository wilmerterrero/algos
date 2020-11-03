
// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        const numbers = x.toString();
        let reversed = numbers.split("").reverse().join("")
        return (x==reversed);
};
console.log(isPalindrome(121));