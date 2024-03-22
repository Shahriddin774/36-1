const array = [34, 54, 1, 23, 678, 72, 9, 10, 5, 89, 900];
let smallest = array[0];
let largest = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i];
    }
    if (array[i] > largest) {
        largest = array[i];
    }
}

console.log("Наименьшее число:", smallest);
console.log("Наибольшее число:", largest);
let userNum = prompt("введите число")
let userInp = parseInt(userNum)
for (let i = 1; i <=10; i++){
    let result = userInp * i
    console.log(userInp + "*" + i + "=" + result)
}
function countVowels(str) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); // Преобразование символа к нижнему регистру для унификации сравнения
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const str = "яблоко";
const vowelsCount = countVowels(str);
console.log(`Количество гласных в "${str}": ${vowelsCount}`);
