let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);
        display.value = result;

        // Send data to PHP
        fetch("save.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `expression=${encodeURIComponent(expression)}&result=${encodeURIComponent(result)}`
        });
    } catch (e) {
        display.value = "Error";
    }
}

}
