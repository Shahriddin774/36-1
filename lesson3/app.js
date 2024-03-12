var array = [2,4,3,2]
for (var i = 0; i < array.length; i++){
    array[i] *= 2
}
console.log(array)
printDelimiter()

for (var i = 5; i>=1; i--){
    console.log(i)
}
printDelimiter()

var arr = [123,234,345,45,43,56,57,67,78]
for (var i = 0; i < arr.length; i++){
    var number = String(arr[i])[0]
    if (number === "3" || number === "5"){
        console.log(arr[i])
    }
}
printDelimiter()

var bornChildren = [2024,2012,2005,2022,2020,2000,1994,1999,2019,2018,2023,2021,2013,2017,2003,2001]
var gifts = 0
var currents = 2024

// for..of-array

for (var i of bornChildren){
    var childAge = currents - i
    if (childAge >= 5 && childAge <= 12){
        gifts++
    }
}
console.log(`Gift total: ${gifts} of ${bornChildren.length}`)
printDelimiter()

// for..in-object
var users = {
    user1: "user1",
    user2: "user2",
    user3: "user3"
}
printDelimiter()

for(var key in users){
    console.log(key)
}
printDelimiter()

for(var user of Object.keys(users)){
    console.log(user)
}
printDelimiter()

// function - declaration
function printDelimiter(){
    console.log("-".repeat(70))
}

printDelimiter()

// function - expression
var sayHello = function(){
    console.log("hi")
}
sayHello()


// калькулятор
function add(num1, num2){
    return num1 + num2
}
function subtract (num1, num2){
    return num1 - num2
}
function multiplay(a, b){
    return a * b
}
function  divide(a, b){
    if (b !== 0){
        return a / b
    }else{
        return "error"
    }
}

var num1 = 10
var num2 = 5

console.log(`сумма: ${add(num1, num2)}`)
console.log(`разность: ${subtract(num1, num2)}`)
console.log(`Произведение: ${multiplay(num1, num2)}`)
console.log(`Частное: ${divide(num1, num2)}`)