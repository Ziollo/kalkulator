const results = document.getElementById("results");

const themeToggle = document.getElementById('theme-toggle');

const functionToggle = document.getElementById('function-toggle');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});

functionToggle.addEventListener('change', function() {
    if (this.checked) {
        window.location.href = 'funkcje.html';
    } else {

        window.location.href = 'index.html';
    }
});

if (window.location.pathname.includes('funkcje.html')) {
    functionToggle.checked = true;
}

function display(value) {
    const screen = document.getElementById("results");
    const isCurrencyMode = typeof calculateConversion === 'function';
    const maxLength = isCurrencyMode ? 8 : 10;

    if (screen.value.length < maxLength) {
        screen.value += value;

        if (isCurrencyMode) {
            calculateConversion();
        }
    }
}

function beck() {
    results.value = results.value.slice(0, -1);
    if (typeof calculateConversion === 'function') {
        calculateConversion();
    }
}

function delet() {
    results.value = "";
    const convertedInput = document.getElementById('results-converted');
    if (convertedInput) {
        convertedInput.value = "";
    }
}

function calc() {
    try {
        results.value = eval(results.value.replace('×', '*').replace('÷', '/'));
    } catch (e) {
        results.value = "Błąd";
    }
}

function sign() {
    if (results.value) {
        if (results.value.startsWith('-')) {
            results.value = results.value.slice(1); 
        } else {
            results.value = '-' + results.value;
        }
    }
}

function squareRoot() {
    if (results.value) {
        try {
            let current = eval(results.value.replace('×', '*').replace('÷', '/'));
            results.value = Math.sqrt(current);
        } catch (e) {
            results.value = "Błąd";
        }
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '.') {
        display(key);
    }

    if (key === 'Enter') {
        if (typeof calc === 'function' && !window.location.pathname.includes('funkcje.html')) {
            calc();
        }
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
        delet();
    }

    if (key === 'Backspace') {
        beck();
    }

    const operators = ['+', '-', '*', '/'];
    if (operators.includes(key)) {
        if (!window.location.pathname.includes('funkcje.html')) {
            display(key);
        }
    }
});

