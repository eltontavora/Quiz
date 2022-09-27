

var resposta1 = parseInt(document.getElementById("radioquestao1").value);
var resposta2 = parseInt(document.getElementById("radioquestao2").value);

//var resp1 = parseInt(document.querySelector('input[id="radioquestao1"]:checked').value);
//console.log(resp1);

var form = document.querySelector('#questions_box');
var botao = document.querySelector('#submit1');

botao.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(form.q1.value);
});