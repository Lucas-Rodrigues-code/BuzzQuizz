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
    for(let i = 0; i < perguntas.length; i++) {
        divDePerguntas += `
        <div class="perguntas-quizz">       
            <div class="pergunta">${perguntas[i].title}</div>
            <div class="alternativas">           
        
        `
        respostas = perguntas[i].answers;

        // console.log(respostas);

        //respostas organizadas aleatoriamente
        // respostas.sort(comparador);

        // function comparador() { 
        //     return Math.random() - 0.5; 
        // }

        // console.log(respostas);
        
        //laço para adicionar as respostas
        for(let i2 = 0; i2 < respostas.length; i2++){
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


let resposta0;
let resposta1;
let resposta2;
let resposta3;

let porcento;


function selecionarAlt0(altSelecionada0){
    const selecionarTodas = document.querySelectorAll(".alt0");

    // console.log(selecionarTodas);

    altSelecionada0.classList.add ('selecionada');

    for(let i = 0; i < 4; i++){
        if(selecionarTodas[i].classList.contains('selecionada') === false){
            selecionarTodas[i].style.opacity = ('0.5');
        }
    }

    const certoOuErrado = document.querySelectorAll(".alt0>p");

    for(let i = 0; i < 4; i++){
        if(respostas[i].isCorrectAnswer === true){
            certoOuErrado[i].style.color = ('green');
        } else {
            certoOuErrado[i].style.color = ('red');

        }
    }

    
    const resposta  = altSelecionada0.querySelector('.true-false').innerHTML;

    if(resposta === 'true') {
        resposta0 = 1;
    } else {
        resposta0 = 0;
    }

    mostrarResultado();
    
}

function selecionarAlt1(altSelecionada1){
    const selecionarTodas = document.querySelectorAll(".alt1");

    // console.log(selecionarTodas);

    altSelecionada1.classList.add ('selecionada');

    for(let i = 0; i < 4; i++){
        if(selecionarTodas[i].classList.contains('selecionada') === false){
            selecionarTodas[i].style.opacity = ('0.5');
        }
    }

    const certoOuErrado = document.querySelectorAll(".alt1>p");

    for(let i = 0; i < 4; i++){

        if(respostas[i].isCorrectAnswer === true){
            certoOuErrado[i].style.color = ('green');
        } else {
            certoOuErrado[i].style.color = ('red');

        }
    }
    
    const resposta  = altSelecionada1.querySelector('.true-false').innerHTML;
   
    if(resposta === 'true') {
        resposta1 = 1;
    } else {
        resposta1 = 0;
    }

    mostrarResultado();


}

function selecionarAlt2(altSelecionada2){
    const selecionarTodas = document.querySelectorAll(".alt2");

    // console.log(selecionarTodas);

    altSelecionada2.classList.add ('selecionada');

    for(let i = 0; i < 4; i++){
        if(selecionarTodas[i].classList.contains('selecionada') === false){
            selecionarTodas[i].style.opacity = ('0.5');
        }
    }

    const certoOuErrado = document.querySelectorAll(".alt2>p");

    for(let i = 0; i < 4; i++){
        if(respostas[i].isCorrectAnswer === true){
            certoOuErrado[i].style.color = ('green');
        } else {
            certoOuErrado[i].style.color = ('red');

        }
    }
    
    const resposta  = altSelecionada2.querySelector('.true-false').innerHTML;

    if(resposta === 'true') {
        resposta2 = 1;
    } else {
        resposta2 = 0;
    }

    mostrarResultado();

}

function selecionarAlt3(altSelecionada3){
    const selecionarTodas = document.querySelectorAll(".alt3");

    // console.log(selecionarTodas);

    altSelecionada3.classList.add ('selecionada');

    for(let i = 0; i < 4; i++){
        if(selecionarTodas[i].classList.contains('selecionada') === false){
            selecionarTodas[i].style.opacity = ('0.5');
        }
    }

    const certoOuErrado = document.querySelectorAll(".alt3>p");

    for(let i = 0; i < 4; i++){
        if(respostas[i].isCorrectAnswer === true){
            certoOuErrado[i].style.color = ('green');
        } else {
            certoOuErrado[i].style.color = ('red');

        }
    }

    const resposta  = altSelecionada3.querySelector('.true-false').innerHTML

    if(resposta === 'true') {
        resposta3 = 1;
    } else {
        resposta3 = 0;
    }

    mostrarResultado();
    
}

function mostrarResultado() {
    if(resposta0 !== undefined) {
        if(resposta1 !== undefined) {
            if(resposta2 !== undefined) {
                
            porcento = Math.round(100*(resposta0 + resposta1 + resposta2)/3);    
            
            renderizarResposta();

            }

           
        }
    }
}

function renderizarResposta() {
    const result = document.querySelector(".resultado-quizz");

    result.innerHTML += `
        <div class="resultado-topo">${porcento}% de acerto</div>
        <div class="resultado-main">
            <img src="cas.png" />
            <div class="texto-resultado">fasdlkjflksdjdfasd fadsjfhasdfh lkjsdhfahd</div>
        </div>
        
        

    `

}



// tela 3

// tela 3.1

let tituloQuizz;
let urlImg;
let quantasPerguntas;
let quantosNiveis;

function prosseguirParaCriarPerguntas() {

    tituloQuizz = document.getElementById("titulo");
    urlImg = document.getElementById("url");
    quantasPerguntas = document.getElementById("perguntasQtd");
    quantosNiveis = document.getElementById("niveisQtd");



}

//tela 3.2

//criar as divs com as perguntas a partir da resposta dada com quantas perguntas
function renderizarPerguntarCriar() {
    const divPerguntasCriar = document.querySelector(".perguntas32");

    console.log(divPerguntasCriar);

    for( let i = 0; i < 2; i++) { //aqui a gente substitui o 2 por -> quantasPerguntas.value
        let divDeCadaPergunta = `
            <h1>Pergunta ${i+1}</h1>
            <input id="texto-pergunta-${i+1}" placeholder="Texto da pergunta" class="campo-input">
            <input id="cor-pergunta-${i+1}" placeholder="Cor de fundo da pergunta" class="campo-input">
            <h1>Resposta da pergunta</h1>
            <input id="correta-${i+1}" placeholder="Resposta correta" class="campo-input">
            <input id="img-correta-${i+1}" placeholder="URL da imagem" class="campo-input">
            <h1>Respostas incorretas</h1>
            <input id="incorreta1-${i+1}" placeholder="Resposta incorreta 1" class="campo-input">
            <input id="img-incorreta1-${i+1}" placeholder="URL da imagem 1" class="campo-input">
            <input id="incorreta2-${i+1}" placeholder="Resposta incorreta 2" class="campo-input">
            <input id="img-incorreta2-${i+1}" placeholder="URL da imagem 2" class="campo-input">
            <input id="incorreta3-${i+1}" placeholder="Resposta incorreta 3" class="campo-input">
            <input id="img-incorreta3-${i+1}" placeholder="URL da imagem 3" class="campo-input">
        `
        divPerguntasCriar.innerHTML = divPerguntasCriar.innerHTML + divDeCadaPergunta;
    }


}

renderizarPerguntarCriar();

//array com as perguntas
let perguntasCriar = []

let textoPergunta;
let corPergunta;

let correta;
let imgCorreta;

let incorreta1;
let imgIncorreta1;
let incorreta2;
let imgIncorreta2;
let incorreta3;
let imgIncorreta3;


function prosseguirParaCriarNiveis() {
    
    for(let i = 0; i < 2; i++){ 
        textoPergunta = document.getElementById(`texto-pergunta-${i+1}`)
        corPergunta = document.getElementById(`cor-pergunta-${i+1}`);
        
        correta = document.getElementById(`correta-${i+1}`);
        imgCorreta = document.getElementById(`img-correta-${i+1}`);
        
        incorreta1 = document.getElementById(`incorreta1-${i+1}`);
        imgIncorreta1 = document.getElementById(`img-incorreta1-${i+1}`);
        incorreta2 = document.getElementById(`incorreta2-${i+1}`);
        imgIncorreta2 = document.getElementById(`img-incorreta2-${i+1}`);
        incorreta3 = document.getElementById(`incorreta3-${i+1}`);
        imgIncorreta3 = document.getElementById(`img-incorreta3-${i+1}`);


        perguntasCriar[i] = {
            title: textoPergunta.value,
            color: corPergunta.value,
            answers : [
                {
                    text: correta.value,
                    image: imgCorreta.value,
                    isCorrectAnswer: true
                },
                {
                    text: incorreta1.value,
                    image: imgIncorreta1.value,
                    isCorrectAnswer: false   
                },
                {
                    text: incorreta2.value,
                    image: imgIncorreta2.value,
                    isCorrectAnswer: false   
                },
                {
                    text: incorreta3.value,
                    image: imgIncorreta3.value,
                    isCorrectAnswer: false   
                }
            ]
        }
    }

}

console.log(perguntasCriar);
















