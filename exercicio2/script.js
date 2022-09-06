// # Exercício 2

// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa
//terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira,
//e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >=18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>



//-------------------------------------------------------




// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa
//terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.



let idade = prompt("Insira sua idade");
    console.log(idade)

const temEnsinoMedio = true
const ensinoSuperior = true


//-------------------------------------------------------


// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

if(idade >= 18){
    alert("Você é maior de idade.")
    console.log("Você é maior de idade.")
} else{
    alert("Você é menor de idade")
    console.log("Você é menor de idade")
}

if(temEnsinoMedio){
    alert("Você cursou o Ensino Médio.")
    console.log("Você cursou o Ensino Médio.")
} else {
    alert("Você não cursou o Ensino Médio")
    console.log("Você não cursou o Ensino Médio")
}

if(ensinoSuperior == false){
    alert("Você não está cursando o Ensino Superior.")
    console.log("Você não está cursando o Ensino Superior.")
} else {
    alert("Você está cursando o Ensino Superior.")
    console.log("Você está cursando o Ensino Superior.")
}


//-------------------------------------------------------


// Crie um `if` que imprima que a afirmacão é verdadeira,
//e um `else` para imprimir que a afirmacão não é verdadeira.


if(idade >= 18){
    alert("Você é maior de idade.")
    console.log("Você é maior de idade.")
} else{
    alert("Você é menor de idade.")
    console.log("Você é menor de idade.")
}


