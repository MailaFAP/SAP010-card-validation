const validator = {
  // ...
  isValid: function (numero) {
    //pegar o parametro e transformar em um array passando de string para número
    const newNumber = numero.split("").map(function (element) {
      return parseInt(element);
    });
    //inverter o array
    newNumber.reverse();
    //pegar o número de duas em duas casas e multiplicar por dois
    //montar um novo array  em branco do mesmo tamanho do array anterior
    const otherArray = new Array(newNumber.length);
    //declarar uma variável com valor zero para soma de todos os valores antes do for 
    let sum = 0;
    //percorrer o array elemento por elemento : declara o index=0 , dá condição de se i é menor que o tamanho da array newNumber, e mostra qual o incremento, que será adicionar a posição o valor do index
    for (let i = 0; i < newNumber.length; i++) {
      //se o resto da divisão de i por 2 for 0, multiplicar o valor por 2    
      if (i % 2 !== 0) {
        otherArray[i] = newNumber[i] * 2;
        //se o valor de i for maior que 9, somar os digitos
        if (otherArray[i] > 9) {
          //declarar uma nova array para obter os digitos como string e separa-las
          const addDigits = otherArray[i].toString().split('');
          //passar o valor obtido como string em número separados e conseguir somá-los
          otherArray[i] = parseInt(addDigits[0]) + parseInt(addDigits[1]);
        }
      } else {
        //se o valor do resto da divisão de i por 2 não for zero, somente copiar o valor de i
        otherArray[i] = newNumber[i];
      }
      //somar os elementos e atribuir á variavel soma 
      sum = sum + otherArray[i];
    }
    if (sum % 10 === 0) {
      //se o resultado da soma %10 for ===0, retornar verdadeiro para a função isValid, se não, retornar falso
      return true;
    } else {
      return false;
    }
  },

  //mascarar os números obtidos no input numberCard
  maskify: function (numberCard) {
    const maskNumber = [];
    for (let i = 0; i < numberCard.length; i++) {
      if (i < numberCard.length - 4) {
        maskNumber.push("#");
      } else {
        maskNumber.push(numberCard[i]);
      }
    }
    const maskEnd = maskNumber.join("");
    return maskEnd;
  }
};

export default validator;
