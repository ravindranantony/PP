function appendToInput(value) {
    document.getElementById("input").value += value;
  }
  
  function clearInput() {
    document.getElementById("input").value = "";
  }
  
  function calculate() {
    var input = document.getElementById("input").value;
    var result = eval(input);
    document.getElementById("input").value = result;
  }