const counterInput = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', () => {
    let value = parseInt(counterInput.value);
    counterInput.value = ++value;
    updateColor(value);
});

decrementBtn.addEventListener('click', () => {
    let value = parseInt(counterInput.value);
    counterInput.value = --value;
    updateColor(value);
});

resetBtn.addEventListener('click', () => {
    counterInput.value = 0;
    updateColor(0);
});

function updateColor(value) {
    if (value > 0) {
        counterInput.style.color = 'green';
    } else if (value < 0) {
        counterInput.style.color = 'red';
    } else {
        counterInput.style.color = 'gray';
    }
}
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

redLight.addEventListener('click', () => {
    showMessage('Стоп');
});

yellowLight.addEventListener('click', () => {
    showMessage('Готовься');
});

greenLight.addEventListener('click', () => {
    showMessage('Иди');
});

function showMessage(message) {
    alert(message);
}
