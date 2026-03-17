/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0)
        return false;
    return ((3 ** 19) % n) ? false : true;
};
