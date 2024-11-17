let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function deleteDigit() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    let calculation = result.value;
    let total = eval(calculation);
    result.value = total;
}
