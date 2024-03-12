var arr = [34, 54, 1, 23, 678, 72, 9, 10, 5, 89, 900];
var minNumber = arr[0];
var maxNumber = arr[0];

for (var i = 1; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber < minNumber) {
        minNumber = currentNumber;
    } else if (currentNumber > maxNumber) {
        maxNumber = currentNumber;
    }
}

console.log("Наименьшее число: " + minNumber);
console.log("Наибольшее число: " + maxNumber);
var userInput = prompt("Введите число для таблицы умножения:");
var userNumber = parseInt(userInput);

for (var i = 1; i <= 10; i++) {
    var result = i * userNumber;
    console.log(i + " * " + userNumber + " = " + result);
}
function countVowels(str) {
    var vowels = "аеёиоуыэюяaeiouyAEIOUY";
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        if (
            char === 'а' || char === 'е' || char === 'ё' ||
            char === 'и' || char === 'о' || char === 'у' ||
            char === 'ы' || char === 'э' || char === 'ю' ||
            char === 'я' || char === 'a' || char === 'e' ||
            char === 'i' || char === 'o' || char === 'u' ||
            char === 'y' || char === 'A' || char === 'E' ||
            char === 'I' || char === 'O' || char === 'U' ||
            char === 'Y'
        ) {
            count++;
        }
    }

    return count;
}

var userWord = prompt("Введите слово для подсчета гласных:");
var result = countVowels(userWord);
console.log("Количество гласных: " + result);
