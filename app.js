// Array para armazenar os nomes dos amigos
let amigos = [];

// Referência ao elemento de resultado
let resultado = document.getElementById("resultado");

// Função para adicionar amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    // Valida se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado!");
    return;
}

    // Adiciona o nome ao array e atualiza a lista
    amigos.push(nomeAmigo);
    atualizarListaAmigos();

    // Limpa o campo de entrada
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista existente
    listaAmigos.innerHTML = "";

    // Adiciona cada amigo como um item da lista
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verifica se há amigos no array
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado e exibe no resultado
    const amigoSorteado = amigos[indiceSorteado];
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}

function reiniciar() {
    // Limpar campo de input
    document.getElementById("amigo").value = "";
    
    // Limpar resultado
    resultado.innerHTML = "";
    
    // Limpar lista de nomes
    nomes = [];
    
    // Atualizar lista visualmente
    document.getElementById("listaAmigos").innerHTML = "";
}

function resetarSorteio() {
    // Limpar lista de participantes
    document.getElementById("listaAmigos").innerHTML = "";
    
    // Limpar resultados do sorteio
    document.getElementById("resultado").innerHTML = "";
    
    // Limpar array de nomes
    nomes = [];
    
    // Alertar usuário
    alert("O sorteio foi resetado!");
}
