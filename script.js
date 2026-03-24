let data = "";

function press(val) {
    data = data + val;
    document.getElementById("screen").value = data;
}

function clearScreen() {
    data = "";
    document.getElementById("screen").value = "";
}

function calculate() {
    try {
        data = eval(data);
        document.getElementById("screen").value = data;
    } catch {
        document.getElementById("screen").value = "error";
    }
}
