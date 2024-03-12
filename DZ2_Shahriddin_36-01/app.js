var userInput = prompt("Введите язык программирования:");
var programmingLanguage = userInput.toLowerCase();
switch (programmingLanguage) {
    case "javascript":
        alert("FrontEnd")
        break
    case "python":
        alert("BackEnd")
        break
    case "java":
        alert("GameDev")
        break
    case "c#":
        alert("GameDev")
        break
    case "ruby":
        alert("Web development")
        break
    default:
        alert("error")
        break
}
var student = {
    name: "Franklin Saint",
    age: 19,
    major: "business management",
}
console.log(Object.values(student))
student.grades = [5,4,5,3,4,5]
student["age"] = 20
student.grades[6] = 4
console.log(Object.values(student))
var sum = 0
for (var i = 1; i <= 5; i++) {
    sum += i
}
console.log("Сумма чисел от 1 до 5: " + sum)
for (var i = 0; i <= 10; i+=2){
    console.log(i)
}
