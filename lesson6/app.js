// default params
function greet(name){
    console.log(`hello, ${name}`)
}
greet("Franklin")

function  calculatePanctangle(width=2, height=3, unit="m"){
    const area = width * height
    console.log(`Площадь прямоугольник: ${area} ${unit}`)

}
calculatePanctangle(5,23,"m")
calculatePanctangle()

const array = [1,2,3,3]
const joinArray = array.join('-')
console.log(joinArray)

// DOM
console.log(document);
const myDiv = document.getElementById("1")
myDiv.innerHTML =  <p>hello world</p>
const myButton = document.getElementById('myButton')
myButton.addEventListener('click',function(){
    alert('Кнопка была нажата')
})
const text1 = document.querySelector('.text')
const text2 = document.querySelectorAll('.text')
const text2 = document.querySelector('#text')
const text2 = document.querySelectorAll('h1')
console.log(text1)
const changeButton = document.querySelector('.changeButton')
changeButton.addEventListener('click', function (){
    const displayText = document.querySelector('#displayText')
    displayText.textContent = 'Saint'
})

// style
const styleDiv = document.querySelector('#styleDiv')
changeButton.addEventListener('click', function (){
    styleDiv.style.backgroundColor = 'blue'
    styleDiv.style.color = 'white'
    styleDiv.style.padding = '10px'
    styleDiv.style.borderRadius = '5px'
})

function addBlogPst(){
    const titleInput = document.querySelector('#title')
    const contentInput = document.querySelector('#content')
    const blogPost = document.querySelector('#blog-posts')

    const title = titleInput.value
    const content = contentInput.value
    if (title && content){
        const article = document.createElement('article')
        article.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        
        `;
        blogPost.appendChild(article)
        title.value = ''
        content.value = ''
    }else {
        alert('Заполните поле')
    }
}