const results = document.getElementById("results");

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});

function display(input) {
    results.value += input;
}

function beck() {
    results.value = results.value.slice(0, -1);
}

function delet() {
    results.value = "";
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