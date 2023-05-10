import validator from './validator.js';


document.getElementById("button").addEventListener("click", validar);//assim que clicar em confirmar a função tem que rodar.Então, peguei o botão e coloquei um addEventListener para isso acontecer.
function validar(event) {
  event.preventDefault();//fazer uma funçao que pegue o número do cartão digitado e monte um array    
  if (document.getElementById("numberCard").value === "") {
    alert("Digite o número do cartão");
  } else if (validator.isValid(document.getElementById("hidden").value)) {//separar o número do cartão em elementos individuais (pois ele ainda será um número inteiro se colocar somente o parseInt)
    alert("Cartão válido");
  } else {
    alert("Cartão inválido");
  }
}

document.getElementById("numberCard").addEventListener("keyup", mascarar);
function mascarar(event) {
  const letra = event.key;
  if (isNaN(parseInt(letra))) {
    document.getElementById("numberCard").value = document.getElementById("numberCard").value.substring(0, document.getElementById("numberCard").value.length - 1);
  } else {
    document.getElementById("hidden").value = document.getElementById("hidden").value + letra;
    document.getElementById("numberCard").value = validator.maskify(document.getElementById("numberCard").value);
  }
  
}

