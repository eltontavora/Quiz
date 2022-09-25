

var resposta1 = document.getElementById("radioquestao1").value;
var resposta2 = document.getElementById("radioquestao2").value;



var placar = resposta1 + resposta2

function questionario(perguntas) {
    console.log(questionario);
    console.log(perguntas);
}

var perguntas = 0;
var numero;

document.querySelector('button').onclick = function () {
    perguntas = perguntas + 1;
    questionario(perguntas);
}
