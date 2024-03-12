var days = 9
switch (days){
    case 1:
        console.log("понедельник")
        break
    case 2:
        console.log("вторник")
        break
    case 3:
        console.log("среда")
        break
    case 4:
        console.log("четверг")
        break
    case 5:
        console.log("пятница")
        break
    case 6:
        console.log("суббота")
        break
    case 7:
        console.log("воскресенье")
        break
    default:
        console.log("ошибка")
}
var color = "red"
switch (color){
    case "red":
        console.log("stop")
        break
    case "yellow":
        console.log("wait")
        break
    case "green":
        console.log("go")
        break
    default:
        console.log("error")

}


// 4) underfined
let text;
console.log(typeof text)
// 5) null
let text2 = null
console.log(typeof text2)

// NaN - not a number, infinity
var example = "f" / 2
console.log(typeof example)
console.log(234 / 0)
// 6) object
var user =  {
    name: "Franklin",
    surname: "Saint",
    age: 19,
    address: {
        street: "grow street",
        building: "7",
        float:"1",
        number:null
    },
    family: true,
    else: undefined
}
console.log(user)

//методы
console.log(user.name)
console.log(user.address.float)
user.work = "krek"
delete user.else
user["age"] = 20
console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("name"))

//array  - массив
var numbers = [1,2,3,4,5,6,7,"Franklin Saint"]
console.log(numbers[2])
console.log(numbers.length - 2)
console.log(numbers[7][9])

numbers[8] = 9
console.log(numbers[8])

//цикл
//for
for(var i = 0; i <= 10; i++){
    console.log(i)
}