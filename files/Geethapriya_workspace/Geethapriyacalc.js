function insert(num) {
    document.getElementById('result').value += num;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  }