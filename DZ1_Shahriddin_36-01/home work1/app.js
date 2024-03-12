var num1 = Number(prompt("Введите число"))
var num2 = Number(prompt("Введите второе число"))
var math = prompt("Введите математическое значение (+, -, /, *)",)
if (num1 > -1 && num2 > -1) {
    if (math === "-") {
        alert(num1 - num2)
    }else if (math === "+") {
        alert(num1 + num2)
    }else if (math === "*"){
        alert(num1 * num2)
    }
}else {
    alert("Ошибка! Не должно быть меньше 0")
}
if (math === "/") {
    if (num2 > 0) {
        alert(num1 / num2)
    } else {
        alert("Ошибка! Не должно быть меньше 0 или равняться 0")
    }
}
    var month = prompt("Введите свой месяц рождения:")
    if (month === "Декабрь" || month === "Январь" || month === "Февраль") {
        alert("Ваш месяц Зима")
    } else if (month === "Март" || month === "Апрель" || month === "Май") {
        alert("Ваш месяц Весна")
    } else if (month === "Июнь" || month === "Июль" || month === "Август") {
        alert("Ваш месяц Лето")
    } else if (month === "Сентябрь" || month === "Октябрь" || month === "Ноябрь") {
        alert("Ваш месяц Осень")
    } else {
        alert("Ошибка!")
    }





