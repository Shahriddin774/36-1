var num1 = Number(prompt("Введите число"))
var num2 = Number(prompt("Введите второе число"))
var math = prompt("Введите математическое значение (+, -, /, *)",)
if (num1 > -1 && num2 > -1) {
    if (math === "+") {
        alert(num1 + num2)
    } else if (math === "-") {
        alert(num1 - num2)
    } else if (math === "*") {
        alert(num1 * num2)
    } else if (math === "/") {
        alert(num1 / num2)
    } else {
        alert("Ошибка!")
    }
}else {
    alert("Ошибка!")
}
let month = prompt("Введите месяц:")
let seson = month.toLowerCase()
if (seson === "Декабрь" || seson === "Январь" || seson === "Февраль"){
    alert("Зима")
}else if (seson === "Март" || seson === "Апрель" || seson === "Май"){
    alert("Весна")
}else if (seson === "Июнь" || seson === "Июль" || seson === "Август"){
    alert("Лето")
}else if (seson === "Сентябрь" || seson === "Октябрь" || seson === "Ноябрь"){
    alert("Осень")
}else {
    alert("error")
}


