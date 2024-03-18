const botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var CEP = document.getElementById("CEP");
var logradouro = document.getElementById("lougradoro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemnto");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(){
    alert("O nome inserido foi " + nome.value);
    saida.innerText = "nome: " + nome.value +
    " \n Email: " + email.value +
    " \n telefone: " + telefone.value +
    " \n CEP: " + CEP.value +
    " \n logradouro: " + logradouro.value +
    " \n numero: " + numero.value +
    " \n complemento: " + compl.value +
    " \n bairro: " + bairro.value +
    " \n cidade: " + cidade.value +
    " \n estado: " + estado.value;
} 







}