// let quizzes = [];


// function obterQuizzes() {
//     const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
//     promessa.then ( quizzesChegaram );
// }


// obterQuizzes();

// function quizzesChegaram(resposta){
//     console.log(resposta);

//     console.log(resposta.data);
// }

let perguntas = [];
let respostas = [];

function obterUmQuizz() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/10508');
    promessa.then ( renderizarQuizz );
}

obterUmQuizz();

function renderizarQuizz(resposta){
    dadosQuizz = resposta.data;
    const dadosTopo = document.querySelector(".topo");

    dadosTopo.innerHTML += `
        <img src="${dadosQuizz.image}"/>
        <div class="camada-preta"></div>
        <h1>${dadosQuizz.title}</h1>
    `
    
    perguntas = dadosQuizz.questions;

    // console.log(perguntas);
    

    const listaPerguntas = document.querySelector(".main");
    let divDePerguntas = '';

    for( i = 0; i < perguntas.length; i++) {
        divDePerguntas += `
        <div class="perguntas-quizz">       
            <div class="pergunta">${perguntas[i].title}</div>
            <div class="alternativas">           
        
        `
        respostas = perguntas[i].answers;

        console.log(respostas);

        // const listaRespostas = document.querySelector(".perguntas-quizz");

        for( i2 = 0; i2 < respostas.length; i2++){
            divDePerguntas += `
            
                <div class="alt">
                    <img src="${respostas[i2].image}">
                    <p>${respostas[i2].text}</p>
                </div>
            
            `
        }

        divDePerguntas += `
            </div>
        </div>
        `
        listaPerguntas.innerHTML = divDePerguntas;
        console.log(divDePerguntas);
    }

    
    
}

