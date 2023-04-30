import validator from './validator.js';

console.log(validator);


//assim que clicar em confirmar a função tem que rodar.Então, peguei o botão e coloquei um addEventListener para isso acontecer.
document.getElementById("button").addEventListener("click", validar);
function validar() {
    //fazer uma funçao que pegue o número do cartão digitado e monte um array    
    //separar o número do cartão em elementos individuais (pois ele ainda será um número inteiro se colocar somente o parseInt)
    if(validator.isValid(document.getElementById("numberCard").value)) {
        alert("Cartão válido");
    } else {
        alert("Cartão inválido");
    }
}

document.getElementById("numberCard").addEventListener("keydown", mascarar);
function mascarar() {
    document.getElementById("numberCard").value = validator.maskify(document.getElementById("numberCard").value); 
}