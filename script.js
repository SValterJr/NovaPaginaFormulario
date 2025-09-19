const prompt = require('prompt-sync') ({ sigint: true});

function mostrarDados() {
    const nome = document.getElementById('nome').value;
    document.getElementById('resultado').innerHTML = nome;
}

function carregarFotos() {

}

// criar funcionalidade para esconder o campo da escolha de foto quando o checkbox não estiver marcado.