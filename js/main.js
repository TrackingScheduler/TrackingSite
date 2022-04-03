let feelLow = document.querySelector('#feelLow');
let feelLowD = document.querySelector('#feelLowD');

btnAdd.addEventListener('click', () => {
    feelLowD.value = parseInt(feelLowD.value) + 1;
});