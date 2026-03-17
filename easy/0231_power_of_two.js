/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0)
        return false
    return (2 ** 30 % n) ? false : true
};
