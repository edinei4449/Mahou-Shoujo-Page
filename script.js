let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("input[type='text']");
let dados = [];

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do data.json
    if (dados.length === 0) {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
    }

    const termoBusca = campoBusca.value.toLowerCase();
    const resultados = dados.filter(dado => dado.nome.toLowerCase().includes(termoBusca));

    // Limpa os cards existentes antes de renderizar os novos
    cardContainer.innerHTML = ''; 
    renderizarCards(resultados);
}

function renderizarCards(dados) {
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <img src="${dado.imagem}" alt="Capa do anime ${dado.nome}">
            <h2>${dado.nome}</h2>
            <p>${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Assistir</a>
        `
        cardContainer.appendChild(article);
    }

    
}