function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function displayFibonacci() {
    var n = document.getElementById("number").value;
    var result = fibonacci(n);
    document.getElementById("output").innerHTML = result.join(", ");
}