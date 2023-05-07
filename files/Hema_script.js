let result = document.getElementById("result");

function addToResult(val) {
    result.value += val;
}

function clearResult() {
    result.value = "";
}

function getResult() {
    result.value = eval(result.value);
}
