let numberHandler = document.querySelector('.number');
console.log('number')
let number = 0;

function decreaseHandler() {
    if( number >= 1){
        number--;
        numberHandler.textContent = number;
    }
}

function resetHandler() {
    number = 0;
    numberHandler.textContent = number;
}

function increasedHandler() {
    ++number;
    numberHandler.textContent = number; 
}


function manualHandler() {
    manualHandler.textContent = number; 
}

