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

    //laço para adicionar as perguntas
    for( i = 0; i < perguntas.length; i++) {
        divDePerguntas += `
        <div class="perguntas-quizz">       
            <div class="pergunta">${perguntas[i].title}</div>
            <div class="alternativas">           
        
        `
        respostas = perguntas[i].answers;

        //respostas organizadas aleatoriamente
        respostas.sort(comparador);

        function comparador() { 
            return Math.random() - 0.5; 
        }
        
        //laço para adicionar as respostas
        for( i2 = 0; i2 < respostas.length; i2++){
            divDePerguntas += `
            
                <div class="alt${i}" onclick="selecionarAlt${i}(this)">
                    <img src="${respostas[i2].image}">
                    <p>${respostas[i2].text}</p>
                    <div class="true-false">${respostas[i2].isCorrectAnswer}</div>
                </div>
            
            `
        }

        divDePerguntas += `
            </div>
        </div>
        `
        listaPerguntas.innerHTML = divDePerguntas;
        //console.log(divDePerguntas);

    
    }
       
}

function selecionarAlt0(altSelecionada){
    const selecionarTodas = document.querySelectorAll(".alt0");

    // console.log(selecionarTodas);

    altSelecionada.classList.add ('selecionada');

    for( i = 0; i < 4; i++){
        if(selecionarTodas[i].classList.contains('selecionada') === false){
            selecionarTodas[i].style.opacity = ('0.5');
        }
    }

    const certoOuErrado = document.querySelectorAll(".alt0>p");

    for( i = 0; i < 4; i++){
        if(respostas[i].isCorrectAnswer === true){
            certoOuErrado[i].style.color = ('green');
        } else {
            certoOuErrado[i].style.color = ('red');

        }
    }
    
}

function selecionarAlt1(altSelecionada){
    const selecionarTodas = document.querySelectorAll(".alt1");

    // console.log(selecionarTodas);

    altSelecionada.classList.add ('selecionada');

    for( i = 0; i < 4; i++){
        if(selecionarTodas[i].classList.contains('selecionada') === false){
            selecionarTodas[i].style.opacity = ('0.5');
        }
    }

    const certoOuErrado = document.querySelectorAll(".alt1>p");

    for( i = 0; i < 4; i++){
        if(respostas[i].isCorrectAnswer === true){
            certoOuErrado[i].style.color = ('green');
        } else {
            certoOuErrado[i].style.color = ('red');

        }
    }
    
}

function selecionarAlt2(altSelecionada){
    const selecionarTodas = document.querySelectorAll(".alt2");

    // console.log(selecionarTodas);

    altSelecionada.classList.add ('selecionada');

    for( i = 0; i < 4; i++){
        if(selecionarTodas[i].classList.contains('selecionada') === false){
            selecionarTodas[i].style.opacity = ('0.5');
        }
    }

    const certoOuErrado = document.querySelectorAll(".alt2>p");

    for( i = 0; i < 4; i++){
        if(respostas[i].isCorrectAnswer === true){
            certoOuErrado[i].style.color = ('green');
        } else {
            certoOuErrado[i].style.color = ('red');

        }
    }
    
}

function selecionarAlt3(altSelecionada){
    const selecionarTodas = document.querySelectorAll(".alt3");

    // console.log(selecionarTodas);

    altSelecionada.classList.add ('selecionada');

    for( i = 0; i < 4; i++){
        if(selecionarTodas[i].classList.contains('selecionada') === false){
            selecionarTodas[i].style.opacity = ('0.5');
        }
    }

    const certoOuErrado = document.querySelectorAll(".alt3>p");

    for( i = 0; i < 4; i++){
        if(respostas[i].isCorrectAnswer === true){
            certoOuErrado[i].style.color = ('green');
        } else {
            certoOuErrado[i].style.color = ('red');

        }
    }
    
}






