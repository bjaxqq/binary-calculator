function calculate() {
    const num1 = document.getElementById('input1').value;
    const num2 = document.getElementById('input2').value;
    const operation = document.getElementById('operation').value;
    let result;

    const a = parseInt(num1, 2);
    const b = parseInt(num2, 2);

    if (isNaN(a) || isNaN(b)) {
        alert('Please enter valid binary numbers');
        return;
    }

    switch (operation) {
        case 'add':
            result = (a + b).toString(2);
            break;
        case 'subtract':
            result = (a - b).toString(2);
            break;
        case 'multiply':
            result = (a * b).toString(2);
            break;
        case 'divide':
            result = (a / b).toString(2);
            break;
        default:
            result = 'Invalid Operation';
    }

    document.getElementById('result').textContent = result;
}

function performBitwiseOperation() {
    const num1 = document.getElementById('bitwiseInput1').value;
    const num2 = document.getElementById('bitwiseInput2').value;
    const operation = document.getElementById('bitwiseOperation').value;
    let result;

    const a = parseInt(num1, 2);
    const b = parseInt(num2, 2);

    if (isNaN(a) || isNaN(b)) {
        alert('Please enter valid binary numbers');
        return;
    }

    switch (operation) {
        case 'and':
            result = (a & b).toString(2);
            break;
        case 'or':
            result = (a | b).toString(2);
            break;
        case 'xor':
            result = (a ^ b).toString(2);
            break;
        case 'not':
            result = (~a >>> 0).toString(2);
            break;
        default:
            result = 'Invalid Operation';
    }

    document.getElementById('bitwiseResult').textContent = result;
}

function convert() {
    const number = document.getElementById('number').value;
    const baseFrom = document.getElementById('baseFrom').value;
    const baseTo = document.getElementById('baseTo').value;

    const parsedNumber = parseInt(number, baseFrom);
    if (isNaN(parsedNumber)) {
        alert('Please enter a valid number for the selected base');
        return;
    }

    const convertedResult = parsedNumber.toString(baseTo);
    document.getElementById('convertedResult').textContent = convertedResult.toUpperCase();
}

function binaryToAscii() {
    const binaryInput = document.getElementById('binaryInput').value;
    if (!/^[01\s]+$/.test(binaryInput)) {
        alert('Please enter a valid binary string');
        return;
    }

    const asciiResult = binaryInput
        .split(' ')
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');
    
    document.getElementById('asciiResult').textContent = asciiResult;
}

function clearInputs() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').textContent = '';
}

function clearBitwiseInputs() {
    document.getElementById('bitwiseInput1').value = '';
    document.getElementById('bitwiseInput2').value = '';
    document.getElementById('bitwiseResult').textContent = '';
}

function clearConversionInputs() {
    document.getElementById('number').value = '';
    document.getElementById('convertedResult').textContent = '';
}

function clearAsciiInputs() {
    document.getElementById('binaryInput').value = '';
    document.getElementById('asciiResult').textContent = '';
}
