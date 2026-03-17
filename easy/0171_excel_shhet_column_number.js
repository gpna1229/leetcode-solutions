/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    var sum = exp = 0;
    for (i = columnTitle.length - 1; i >= 0; i--) {
        var val = columnTitle[i].charCodeAt() - 64;
        sum += val * (26 ** exp++);
    }
    return sum;
};
