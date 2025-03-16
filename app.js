let amigoLista = [];

function agregarAmigos(){
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == ''){
        alert('Por favor, insira um nome!');
    }
    else{
        amigoLista.push(nomeAmigo);
    }
    limparCampo();
    exibirAmigos();
}

function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (i =0; i < amigoLista.length; i++){
        let item = document.createElement('li');
        item.textContent = amigoLista[i];
        listaAmgios.appendChild(item);
    }
}

function sorteioDeAmigos(){
    if (amigoLista.length == 0){
        alert('Por favor, insira um nome!');
    }
    else {
        let amigoSorteado = amigoLista[(Math.floor(Math.random() * amigoLista.length))];
        amigoLista.push(amigoSorteado);
        let exibirAmigos = document.getElementById('resultado');
        exibirAmigos.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
        atualizarLista();
    }
}

function exibirAmigos(){
    let exibirAmigos = document.getElementById('resultado');
    exibirAmigos.innerHTML = '';
    atualizarLista();
}

function limparCampo(){
    document.getElementById('amigo').value = '';
}

function adicionarAmigo(){
    agregarAmigos();
}

function sortearAmigo(){
    sorteioDeAmigos();
}