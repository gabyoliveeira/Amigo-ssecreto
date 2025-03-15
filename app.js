let amigos = [];

function inserirNome(){
    const nomeInput = document.getElementById("amigo").value;
    if (nomeInput !== ''){
        amigos.push(nomeInput);
        document.getElementById("amigo").value = '';
    } else {
        alert('Por favor, insira um nome');
    }
}

function adicionarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigos(){
    if (amigos.length == 0){
        alert("Não há nomes disponíveis");
        return;
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `O amigo sorteado é ${amigoSorteado}`;
    }
}

document.getElementById("adicionar").addEventListener("click", inserirNome);
document.getElementById("sortear").addEventListener("click", sortearAmigos);
