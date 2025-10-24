/* --- Operadores de Comparação ---
Igual (==): verifica se dois valores são iguais.
Estritamente igual (===): verifica se dois valores são iguais e do mesmo tipo de dados.
Diferente (!=): verifica se dois valores são diferentes.
Estritamente diferente (!===): verifica se dois valores são diferentes ou de tipos diferentes.
*/

function saudacao(){
    alert("Olá, mundo!");
}

function somaNumeros(num1, num2){
    return num1 + num2;
}
console.log(somaNumeros(5, 7)); // Aparece no console
// alert(somaNumeros(5, 7));

function verificarParOuImpar(numero){
    if(numero % 2 === 0){
        return "Par";
    }else{
        return "Ímpar";
    }
}
console.log(verificarParOuImpar(3));

// Exemplo de operador de comparação
let idade = 22;
let resultado = idade >= 18 ? "Maior de idade":"Menor de idade";
console.log(resultado);

// Exemplo de estrutura de controle
var produtos = [
    {id: 1, tipo: 'camiseta', quantidade: 20},
    {id: 2, tipo: 'livro', quantidade: 15}
]

var qtdtotal = 0

for(const i in produtos){
    qtdtotal += produtos[i].quantidade
}
console.log(qtdtotal);

// Objeto Date
const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
const hora = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();
alert(`Data atual: ${dia}/${mes + 1}/${ano}\nHorário atual: ${hora}:${minutos}:${segundos}`);