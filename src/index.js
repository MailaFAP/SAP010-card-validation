import validator from './validator.js';

console.log(validator);

//declarei a variável número de cartão preenchida no HTML com id= numeroCartao

function validar(){
    //fazer uma funçao que pegue o número do cartão digitado e monte um array
    const cardNumber = (document.getElementById("numeroCartao").value);
    //separar o número do cartão em elementos individuais (pois ele ainda será um número inteiro se colocar somente o parseInt)
    const newNumber = cardNumber.map(function(element){
        return parseInt(element);
    })
    newNumber.reverse()
    //pegar o número de duas em duas casas e multiplicar por dois
    const otherArray = [];
    for (let i = 0; i < newNumber.length; i=i+2) {
        otherArray.push(newNumber[i]);
      }

    console.log(otherArray)
    
}


//somar os digitos de números decimais 
//somar os valores resultantes nos vetores do array 

//se o valor final for do número decimal por zero, o número do cartão é válido
//se não, número de cartão inválido