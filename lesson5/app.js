//filter
var products = [
    { name: 'Ноутбук' , price: 1200, available: true, category: 'Электроника'},
    { name: 'Смартфон' , price: 800, available: true, category: 'Электроника'},
    { name: 'Фотоаппарат' , price: 1500, available: false, category: 'Фото и видео'},
    { name: 'Телевизор' , price: 900, available: true, category: 'Элеткроника'},
    { name: 'Кофемашина' , price: 700, available: true, category: 'Кухонная техника'}
]

var filterProduct = products.filter((product) => product.available === true && product.price < 1000 && product.category === 'Электроника')
console.log(filterProduct)

// map
var numbers = [2,3,4,5]
var mapNumbers = numbers.map((i) => i * 2)
console.log(mapNumbers)

var users = [
    { name: 'Alan', age: 25, active: true},
    { name: 'John', age: 34, active: true},
    { name: 'Alica', age: 23, active: false},
    { name: 'Oliver', age: 46, active: true}
]
var mapUsers = users.map((i) => {
    var status = i.active ? 'Активен' : 'Неактивен'
    return `Имя: ${i.name}, Возраст: ${i.age}, Статус: ${status}`
    }
)
console.log(mapUsers)

// forEach
var number2 = [2,3,4,5]
number2.forEach((number, index)=> console.log( number *  index))
console.log(number2)

// sort
var fruits = ['яблоко','апельсин','банан','груша']
fruits.sort()
console.log(fruits)
fruits.sort((a, b) => b.localeCompare(a))
console.log(fruits)
var str1 = 'яблоко'
var str2 = 'груша'
console.log(str1.localeCompare(str2))
var numbersArray = [12, 344,556,21,2,47]
numbersArray.sort((a, b) => a - b )
console.log(numbersArray)

// ES6+
let name = 'Aidana'
const array = []
array.push(7)
console.log(array)

function getAllSum(...nums){
    let sum = nums.reduce((a, b) => a+=b)
    console.log(sum)
}
getAllSum([8,9,0])
const {name1, age1, ...rest} = {name: 'Jack', age:20, gender: 'male', city: 'New York'}
console.log(rest)
const nums = [1,2]
const  newNums = [...nums,...nums23]
console.log(newNums)

const user = {
    name: 'John',
    age: 20

}
const newUser = {...user, gender: 'male'}
console.log(newNums)

function findMax(...numbers){
    return Math.max(...numbers)

}

console.log(findMax(10,20,30))
