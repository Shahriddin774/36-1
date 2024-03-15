var company = {
    john: 3000,
    jane: 4000,
    tim: 5000,
    alice: 3500
}

function  calculateLateTotalSalary(company){
    var totalSalary = 0
    for(var key in company){
        totalSalary += company[key]
    }
    return totalSalary
}

console.log(`Общая сумма зарплат: ${calculateLateTotalSalary(company)}`)

var courses = {
    javaScript: ["Ruslan", "Farida", "Agzam", "Marlen", "Aidana"],
    python: ["Esen", "Emir", "Ismar", "Elkhan"],
    java: ["Bektur", "Aziz", "Akai", "Danil", "Daniel"],
    ios: ["Akai", "Danil", "Daniel"]
}

function countStudentsByCourse(courses){
    var studentCourses = 0
    for (var course in courses){
        var studentCount = courses[course].length
        studentCourses += studentCount
    }
    return studentCourses
}

console.log(`Количество студентов на каждом курсе: ${countStudentsByCourse(courses)}`)

function add (a, b){
    return a + b
}

var addArrow = (a, b) => a * b
console.log(addArrow(7, 20))
var example = (name, time) => {
    return `Добрый ${time}, ${name}`
}
console.log(example("John", "вечер"))
var sumArray = (array) => {
    var sum = 0
    for(var i = 0; i< array.length; i++){
        sum += array[i]
    }
    return console.log(sum)
}
sumArray([1,2,3])

function sayHello(){
    console.log("Hello World")
}
setTimeout(sayHello, 5000)

function process(callback){
    callbackFunction()
}
function callbackFunction(){
    console.log("Операция завершена")
}

process(callbackFunction)

var array2 = [56,49494]
var array = [1,2,3,4,5]
array.push(23)
console.log(array)
var deleteNumber = array.pop()
console.log(array)
console.log(deleteNumber)
var unshftNumber = array.unshift(56)
var shiftNumber = array.shift()
console.log(array.includes(3))
var spliceNumber = array.splice(0, 4, 78,90)
var concatNumber = array.concat(array2)
console.log(concatNumber)
console.log(array)

// var number = [10, 20, 30, 40, 23, 45, 67, 70, 80]
// var filterArray = numbers.filter(function(num){
//     return num > 40
// })
// console.log(filterArray)

var files = [
    'document.txt', 'image.png', 'screenshot.jpeg', 'document2.txt', 'textfile.txt', 'picture.png'
]
var files = [
    'document.txt', 'image.png', 'screenshot.jpeg', 'document2.txt', 'textfile.txt', 'picture.png'
];

function extractFileFormats(files) {
    var formats = [];

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var dotIndex = file.lastIndexOf('.');

        if (dotIndex !== -1) {
            var format = file.substring(dotIndex + 1);
            formats.push(format);
        }
    }

    return formats;
}

var fileFormats = extractFileFormats(files);
console.log('Форматы файлов: ' + fileFormats.join(', '));
