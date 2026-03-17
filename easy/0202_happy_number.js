/**
 * @param {number} n
 * @return {boolean}
 */
var countSquare = function(n) {
    let sum = 0;
    while (n > 0) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
};
var isHappy = function(n) {
    let slow = fast = n;
    while (fast != 1 && slow != 1) {
        fast = countSquare(countSquare(fast));
        slow = countSquare(slow);
        if ((fast == slow) && fast != 1) {
            return false;
        }
    }
    return true;
};
