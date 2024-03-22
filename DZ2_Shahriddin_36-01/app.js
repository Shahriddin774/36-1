const userInput = prompt("Введите язык программирования:");
const programmingLanguage = userInput.toLowerCase();
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
let student = {
    name:"Franklin Saint",
    age:18,
    major:"business"
}
console.log(Object.values(student))
student.grades = [3,4,5,6,7]
student["age"] = 19
console.log(Object.values(student))
let num = 0
for (let i = 1; i <= 5;){
    num += i
    console.log(i)
}
for (let i = 0; i <= 10; i+=2){
    console.log(i)
}
