const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
const tagCount = {};

for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    if (tag in tagCount) {
        tagCount[tag]++;
    } else {
        tagCount[tag] = 1;
    }
}

const tagCountArray = Object.entries(tagCount);
tagCountArray.sort((a, b) => b[1] - a[1]);

const sortedTagCount = {};
for (let i = 0; i < tagCountArray.length; i++) {
    const key = tagCountArray[i][0];
    const value = tagCountArray[i][1];
    sortedTagCount[key] = value;
}

console.log(sortedTagCount);

// Вот исправленный код для сортировки массива tags:
const sortedTags = tags.slice().sort();
console.log(sortedTags);

function filterBooks(...books) {
    const booksWithU = books.filter(book => book.toLowerCase().includes('у'));
    const otherBooks = books.filter(book => !book.toLowerCase().includes('у'));

    console.log("Книги с буквой 'у':", booksWithU);
    console.log("Остальные книги:", otherBooks);
}

filterBooks('Python для начинающих', 'Наруто', 'Алгоритмы', 'Анна Каренина', 'Гарри Поттер и узник Азкабана');

const courses = [
    {
        courseName: 'JavaScript',
        students: [
            { name: 'John', grades: [60, 55, 95] },
            { name: 'Jack', grades: [59, 90, 95] }
        ]
    },
    {
        courseName: 'Python',
        students: [
            { name: 'Mark', grades: [78, 82, 80] },
            { name: 'Alice', grades: [85, 88, 90] }
        ]
    }
];

const processedCourses = courses.map(course => ({
    course: course.courseName,
    students: course.students.map(student => ({
        name: student.name,
        average_grade: student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length
    }))
}));

console.log(processedCourses);
