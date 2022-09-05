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

//tela 1

let idQuizzTela2;

function selecionarTela2(res){
    const tela1 = document.querySelector(".tela1");
    tela1.classList.toggle("hidden");

    const tela2 = document.querySelector(".tela2");
    tela2.classList.toggle("hidden");

    idQuizzTela2 = res.id

    //console.log(idQuizzTela2);

    function obterUmQuizz() {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idQuizzTela2}`);
        promessa.then ( renderizarQuizz );
    }
    
    obterUmQuizz();
}

//botao criar quizz

function renderizarTela3() {
    const tela1 = document.querySelector(".tela1");
    tela1.classList.toggle("hidden");

    const tela31 = document.querySelector(".tela31");
    tela31.classList.toggle("hidden");
}



//tela2

let perguntas = [];
let respostas = [];
let niveis = [];
let totalDePerguntas;

function renderizarQuizz(resposta){
    dadosQuizz = resposta.data;
    const dadosTopo = document.querySelector(".topo");

    console.log(resposta.data.questions);

    dadosTopo.innerHTML += `
        <img src="${dadosQuizz.image}"/>
        <div class="camada-preta"></div>
        <h1>${dadosQuizz.title}</h1>
    `
    
    perguntas = dadosQuizz.questions;

    totalDePerguntas = perguntas.length;

    niveis = dadosQuizz.levels;
  
    const listaPerguntas = document.querySelector(".main");
    let divDePerguntas = '';

    //laço para adicionar as perguntas
    for(let i = 0; i < perguntas.length; i++) {
        divDePerguntas += `
        <div class="perguntas-quizz">       
            <div id="question" class="pergunta">${perguntas[i].title}</div>
            <div class="alternativas">           
        
        `
        respostas = perguntas[i].answers;

        // console.log(respostas);

        //respostas organizadas aleatoriamente
        respostas.sort(comparador);

        function comparador() { 
            return Math.random() - 0.5; 
        }

        // console.log(respostas);
        
        //laço para adicionar as respostas
        for(let i2 = 0; i2 < respostas.length; i2++){
            divDePerguntas += `
            
                <div id="answer" class="alt" onclick="selecionarResposta(this)">
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


let respostaEscolhida = [];

let quantidadeDeRespostasCertasEscolhidas = 0;

let perguntaRespondidas = 0;

let porcento;

function selecionarResposta(resposta) {
    
    const pergunta = resposta.parentNode;

    const opcoesResposta = pergunta.children;

    for( let i = 0; i < opcoesResposta.length; i++){

        if(!opcoesResposta[i].classList.contains("selecionada")) {
            opcoesResposta[i].style.opacity = ('0.5');
        }
    }

    for( let i = 0; i < opcoesResposta.length; i++){

        if(opcoesResposta[i].classList.contains("selecionada")) {
            console.log("já tem");
            return;
        }
    }

    perguntaRespondidas++;

    resposta.classList.add('selecionada');
    resposta.style.opacity = ("1");

    console.log(resposta.childNodes[5].innerHTML);

    for(let i = 0; i < opcoesResposta.length; i++){

        const certoOuErrado = opcoesResposta[i].childNodes[5].innerHTML;
        const pResposta = opcoesResposta[i].childNodes[3];

        if(certoOuErrado === "true"){

            pResposta.style.color = ("green");
           
        } else {

            pResposta.style.color = ("red");
          
        }
    }

    if(resposta.childNodes[5].innerHTML === "true") {
        quantidadeDeRespostasCertasEscolhidas++;
       
    }
    
   // console.log(pergunta.parentNode.nextElementSibling);

    const proximaPergunta = pergunta.parentNode.nextElementSibling

    //console.log(proximaPergunta);

    if(perguntaRespondidas < totalDePerguntas){
        setTimeout(scroll, 2000, proximaPergunta);
    } else {
        mostrarResultado();
        setTimeout(scroll, 2000, result);
    }
    

    //console.log(quantidadeDeRespostasCertasEscolhidas, perguntaRespondidas, totalDePerguntas);

    
}

function scroll(elemento) {
        
    elemento.scrollIntoView();
}

function mostrarResultado() {
    if(perguntaRespondidas === totalDePerguntas) {

        porcento = Math.round(100*quantidadeDeRespostasCertasEscolhidas/perguntaRespondidas)

        renderizarResposta();

    }
            
}



function renderizarResposta() {
    const divResults = document.querySelector(".resultado-botoes");
    divResults.classList.remove("hidden");

    const result = document.querySelector(".resultado-quizz");

    if(porcento >= niveis[0].minValue && porcento < niveis[1].minvalue) {
        result.innerHTML += `
        <div class="resultado-topo">${porcento}% de acerto: ${niveis[0].title}</div>
        <div class="resultado-main">
            <img src="${niveis[0].image}" />
            <div class="texto-resultado">${niveis[0].text}</div>
        </div>     
    `
    } else if(porcento >= niveis[1].minValue && porcento < niveis[2].minValue ) {
        result.innerHTML += `
        <div class="resultado-topo">${porcento}% de acerto: ${niveis[1].title}</div>
        <div class="resultado-main">
            <img src="${niveis[1].image}" />
            <div class="texto-resultado">${niveis[1].text}</div>
        </div>     
    `
    } else {
        result.innerHTML += `
        <div class="resultado-topo">${porcento}% de acerto: ${niveis[2].title}</div>
        <div class="resultado-main">
            <img src="${niveis[2].image}" />
            <div class="texto-resultado">${niveis[2].text}</div>
        </div>     
    `
    }  

}

function reiniciarQuizz() {

    const voltarParaOTopo = document.querySelector(".cabecalho");

    setTimeout(scroll, 2000, voltarParaOTopo);


}


function voltarPraHome() {
    document.location.reload(true); 
}



// tela 3

// tela 3.1

let tituloQuizz;
let urlImg;
let quantasPerguntas;
let quantosNiveis;

function prosseguirParaCriarPerguntas() {

    const tela31 = document.querySelector(".tela31");
    tela31.classList.toggle("hidden");

    const tela32 = document.querySelector(".tela32");
    tela32.classList.toggle("hidden");

    tituloQuizz = document.getElementById("titulo");
    urlImg = document.getElementById("url");
    quantasPerguntas = document.getElementById("perguntasQtd");
    quantosNiveis = document.getElementById("niveisQtd");

    console.log(quantasPerguntas.value, quantosNiveis.value);

    renderizarPerguntasCriar();
}



//tela 3.2

//criar as divs com as perguntas a partir da resposta dada com quantas perguntas
function renderizarPerguntasCriar() {
    const divPerguntasCriar = document.querySelector(".perguntas32");

    for( let i = 0; i < quantasPerguntas.value; i++) {
        let divDeCadaPergunta = `
            <div id="question-form" class="caixa-pergunta">
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
            </div>
        `
        divPerguntasCriar.innerHTML = divPerguntasCriar.innerHTML + divDeCadaPergunta;
    }


}

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

    const tela32 = document.querySelector(".tela32");
    tela32.classList.toggle("hidden");

    const tela33 = document.querySelector(".tela33");
    tela33.classList.toggle("hidden");
    
    for(let i = 0; i < quantasPerguntas.value; i++){ 
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

    
    renderizarNiverisCriar();

}

// console.log(perguntasCriar);

// tela 3.3

function renderizarNiverisCriar () {
    const divNiveisCriar = document.querySelector(".perguntas33");

    for( let i = 0; i < quantosNiveis.value; i++) { 
        let divDeCadaNivel = `
        <div id="level" class="caixa-nivel">
            <h1>Nível ${i+1}</h1>
            <input id="titulo-nivel-${i+1}" placeholder="Título do nível" class="campo-input">
            <input id="porcentagem-minima-${i+1}" placeholder="% de acerto mínima" class="campo-input">
            <input id="img-nivel-${i+1}" placeholder="URL da imagem do nível" class="campo-input">
            <textarea id="desc-nivel-${i+1}" placeholder ="Descrição do nível" class="especial" rows="10" cols="40" maxlength="500"></textarea>
        </div>
        `
        divNiveisCriar.innerHTML = divNiveisCriar.innerHTML + divDeCadaNivel;
    }
}


// array com os níveis
let niveisCriar = [];

let tituloNivel;
let porcentagemMinima;
let imgNivel;
let descNivel;


function finalizarQuizz() {

    const tela33 = document.querySelector(".tela33");
    tela33.classList.toggle("hidden");

    const tela34 = document.querySelector(".tela34");
    tela34.classList.toggle("hidden");

    for( let i = 0; i < quantosNiveis.value; i++){ 
        tituloNivel = document.getElementById(`titulo-nivel-${i+1}`);
        porcentagemMinima = document.getElementById(`porcentagem-minima-${i+1}`);
        imgNivel = document.getElementById(`img-nivel-${i+1}`);
        descNivel = document.getElementById(`desc-nivel-${i+1}`);

        niveisCriar[i] = {
            title: tituloNivel.value,
            image: imgNivel.value,
            text: descNivel.value,
            minValue: porcentagemMinima.value
        }
    }

    enviarQuizz();

    
}

//Enviar Quizz para API

let novoQuizz;

function enviarQuizz() {

    novoQuizz = {
        title: tituloQuizz.value,
        image: urlImg.value,
        questions: perguntasCriar,
        levels: niveisCriar
    }

    const promessa = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", novoQuizz);
    promessa.then(renderizarFinalCriar)
    promessa.catch(erroAutenticação);

    //console.log(novoQuizz);

    renderizarFinalCriar();

    // quizzUsuario();

    // chamarQuizzUsuario()

    // substituiTelaComQuizzUsuario()
}

function erroAutenticação() {
    alert("Preencha os dados corretamente!");
}



// tela 3.4

function renderizarFinalCriar() {
    const acessarDivFinal = document.querySelector(".perguntas34")

    let divFinal = `
    <div class = "resultado-todo">
        <img src="${novoQuizz.image}"/>
        <h1>${novoQuizz.title}</h1>
    </div>  
    
    
    `
    acessarDivFinal.innerHTML = acessarDivFinal.innerHTML + divFinal;



}

function quizzUsuario() {
    const quizzParaString = JSON.stringify(novoQuizz);
    localStorage.setItem("lista", quizzParaString);  

    //console.log(quizzParaString);
}

function chamarQuizzUsuario() {
    const pegarString = localStorage.getItem("lista");
    const lista = JSON.parse(pegarString);

    //console.log(lista);
}

// function substituiTelaComQuizzUsuario() {
//     const telaSemQuizUsuario = document.querySelector(".criar-quizz");
//     telaSemQuizUsuario.classList.add("hidden");

// }


// function acessarQuizz() {
    
// }






















