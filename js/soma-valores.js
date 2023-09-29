//variavel que irá representar os elementos do html no javascript
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");


//função para o botão calcular
function calcular() {
  let val1,val2,resp = 0;
  val1 = parseFloat(num1.value);
  val2 = parseFloat(num2.value);

  //realizar o calculo
  resp = val1 + val2;

  //mostrar o resultado no HTML


}

//função para o botão limpar
function limparTela() {}
