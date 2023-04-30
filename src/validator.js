const validator = {
  // ...
  isValid: function (numberCard) {
    const newNumber = numberCard.map(function (element) {
      return parseInt(element);
    });
    newNumber.reverse();
    console.log(newNumber);
    //***pegar o número de duas em duas casas e multiplicar por dois
    //montar um novo array  em branco do mesmo tamanho do array anterior
    let otherArray = new Array(newNumber.length);
    //**declarar uma variável com valor zero para soma de todos os valores antes do for  */
    let sum = 0;
    //percorrer o array elemento por elemento : declara o index=0 , dá consição de se i é maior que o tamanho da array newNumber, e mostra qual o incremento, que será adicionar a posição o valor do index
    for (let i = 0; i < newNumber.length; i++) {
      //se o resto da divisão de i por 2 for 0, multiplicar o valor por 2    
      if (i % 2 === 0) {
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
      
      return true;
    } else {
      return false;
    }
  },


  maskify: function (numberCard) {   
    //como fazer a função dar certo com menos de 4 digitos  
    let str = numberCard.substring(0, numberCard.length - 4);
    let num = "#".repeat(str.length);
    let end = numberCard.substring(numberCard.length - 4);
    return num.concat(end);
  }

};

export default validator;
