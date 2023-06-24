let input = document.querySelector("input");
function addValue(e) {
    if (e.textContent === "x") {
        input.value += "*"
    } else {
        
        input.value += e.textContent;
    }

}

function Clear() {
    input.value = null;
}

function claculate() {
    if (input.value === "") {
        input.value += "";
    } else {
        input.value = eval(input.value)
    }
}