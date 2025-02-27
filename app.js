let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim(); // Remove espaços extras

    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = ""; // Limpa o input
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista

    for (const amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    const sorteio = sortear(amigos);
    exibirResultado(sorteio);
}

function sortear(participantes) {
  const participantesCopia = [...participantes];
  const sorteio = {};

  for (let i = 0; i < participantes.length; i++) {
    const participante = participantes[i];
    let amigoSecretoIndex;

    do {
      amigoSecretoIndex = Math.floor(Math.random() * participantesCopia.length);
    } while (participantesCopia[amigoSecretoIndex] === participante);


    sorteio[participante] = participantesCopia[amigoSecretoIndex];
    participantesCopia.splice(amigoSecretoIndex, 1);
  }

  return sorteio;
}

function exibirResultado(sorteio) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';  // Limpa resultados anteriores

    for (const amigo in sorteio) {
        const amigoSecreto = sorteio[amigo];
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou: ${amigoSecreto}`;
        resultadoLista.appendChild(li);
    }
}