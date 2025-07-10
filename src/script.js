var numeroAnterior = "";
  var numeroAtual = "";
  var operador = "";
  
  function input(num){
    numeroAtual += num;
    updateDisplay()
  }
  
  function operator(op){
    if(!numeroAtual) return
    operador = op
    numeroAnterior = numeroAtual
    numeroAtual = ""
    calculate()
  }
  
  function calculate(){
    if(!numeroAtual || !numeroAnterior) return;
    atual = parseFloat(numeroAtual);
    anterior = parseFloat(numeroAnterior);
    result = ""
    switch(operador){
      case "/":
        result = anterior / atual
        break;
      case "+":
        result = anterior + atual
        break;
      case "*":
        result = anterior * atual
        break;
      case "-":
        result = anterior - atual
        break;
      default:
    }
    numeroAtual = result.toString()
    numeroAnterior = '';
    operador = ''
    updateDisplay()
    
  }
  
  function clearDisplay(){
    operador = "";
    numeroAnterior = "";
    numeroAtual = "";
    updateDisplay()
  }
  
  function updateDisplay(){
    document.querySelector(".display").value = numeroAtual
  }