// # Exercício 3

// Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade"
// e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na
// const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a
// nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada"
// caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 



//----------------------------------------------------------------------------------------------



 let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

    if(nacionalidade == "brasileira"){
        alert(`A sua nacionalidade é: ${nacionalidade}`)
        console.log(`A sua nacionalidade é: ${nacionalidade}`)

    } else if(nacionalidade == "argentina"){
        alert(`A sua nacionalidade é: ${nacionalidade}`)
        console.log(`A sua nacionalidade é: ${nacionalidade}`)

    } else if(nacionalidade == "uruguaia"){
        alert(`A sua nacionalidade é: ${nacionalidade}`)
        console.log(`A sua nacionalidade é: ${nacionalidade}`)

    } else if(nacionalidade == "chilena"){
        alert(`A sua nacionalidade é: ${nacionalidade}`)
        console.log(`A sua nacionalidade é: ${nacionalidade}`)

    } else if(nacionalidade == "colombiana"){
        alert(`A sua nacionalidade é: ${nacionalidade}`)
        console.log(`A sua nacionalidade é: ${nacionalidade}`)
        
    } else{
        alert("Nacionalidade não encontrada.")
        console.log("Nacionalidade não encontrada.")
    }

