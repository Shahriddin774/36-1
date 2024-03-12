// console.log("Franklin Saint");
//
// // переменные var
// var name = "Franklin"
// console.log(name)
// var name2 = "Saint"
// console.log(name2)
//
// // CamelCase
// var JavaScriptAndFrontend = ""
//
//  // типы данных
// // 1) string
// var group =  "36-01 geeks"
// console.log(typeof number)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.length)
// console.log(name.repeat(7))
//
// var name3 = "Shahriddin"
// var surname = "Islamov"
// console.log(name3 +" "+ surname)

// 2) number
var number = 77
console.log(number)
var number2 = 45
console.log(number * number2)
console.log(number ** 2)
console.log(number % 2)

console.log("средний возраст группы 36-1 =", (16 + 17 + 18 + 16 + 17 + 18 + 28 + 19 +18 + 16) / 10)

// 3) boolean - false , true
console.log( 34 > 22)
console.log(45 == "45")
console.log(45 === "45")
console.log(45 !== "45")

// логические операторы &&, ||
// условные конструкции if, else..if, else
var login = "geeks@gmail.com"
var password = "geeks3601"

var userLogin = prompt("Введите ваш логин: ")
var userPassword = prompt("Введите ваш пароль: ")
if(userLogin === login && userPassword === password){
    alert("авторизация прошла успешно!")
} else {
    alert("ошибка! проверьте свои данные!")
}
// var num1 = Number(prompt("num1"))
// var num2 = Number(prompt("num2"))
// console.log(num1 + num2)

var experience = Number(prompt("Введите свой опыт работы в годах: "))
var developerLevel;

if (experience > 0 && experience < 1){
    developerLevel = "junior"

}else if(experience >= 1 && experience < 7){
    developerLevel = "middle"

}else if(experience >= 7 && experience < 60){
    developerLevel = "senior"
}else{
    developerLevel = "error"
}
console.log("Ваш уровень - " + developerLevel)