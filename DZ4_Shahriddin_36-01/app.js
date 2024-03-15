var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var tagCount = {};

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if (tag in tagCount) {
        tagCount[tag]++;
    } else {
        tagCount[tag] = 1;
    }
}

console.log(tagCount);
var array1 = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
var array2 = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];

var commonElements = array1.filter(function(item) {
    return array2.indexOf(item) !== -1;
});

console.log(commonElements);
function averagePositive(nums) {
    var positiveNums = nums.filter(function(num) {
        return num > 0;
    });

    if (positiveNums.length === 0) {
        return 0;
    }

    var sum = positiveNums.reduce(function(a, b) {
        return a + b;
    });

    return sum / positiveNums.length;
}

var nums = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8];
console.log(averagePositive(nums));
function wordsWithTa(strings) {
    return strings.filter(function(word) {
        return word.toLowerCase().indexOf('t') !== -1 && word.toLowerCase().indexOf('a') !== -1;
    });
}

var words = ['text', 'frontend', 'apple', 'banana', 'orange', 'Tiger', 'Attention', 'table'];
console.log(wordsWithTa(words));
