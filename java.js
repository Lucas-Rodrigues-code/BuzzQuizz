
function buscarQuizzes() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
    promessa.then(renderizarQuizz)
    promessa.catch(erro)
}

buscarQuizzes();

let idQuizz;

function renderizarQuizz(resposta){
    //console.log(resposta.data)
    const listaQuizz = document.querySelector('.telaQuizzes')
    //console.log(listaQuizz)
    let template;
    
    for(let i =0; i < resposta.data.length; i++){
        template = `
        <div id="${resposta.data[i].id}" class="card-quizz" onclick="selecionarTela2(this)">
           <img src="${resposta.data[i].image}"/> 
           <h3>${resposta.data[i].title}</h3>
        </div>`
        listaQuizz.innerHTML += template

    }
}

function erro(){
    //alert("deu erro")
}





const arrayDePerguntas = [];
let titulo;

// function pegarDadosT3(){
//     titulo = document.getElementById("titulo").value
//     const url = document.getElementById("url").value
//     const perguntasQtd = document.getElementById("perguntasQtd").value
//     const niveisQtd = document.getElementById("niveisQtd").value
//     if( titulo != undefined){
//         alert("deu boa")
//     }
// }
// pegarDadosT3()

