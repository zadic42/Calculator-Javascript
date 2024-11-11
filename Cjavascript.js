function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendNumber(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = value;
    }
    else {
        display.textContent += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    }
    catch {
        display.textContent = 'Error';
    }
}

function del() {
    display.textContent = display.textContent.slice(0, -1);
}