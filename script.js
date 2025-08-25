console.log("-------------------------- DESAFIO --------------------------");
console.log("-------------------------- PARTE I --------------------------");
//PARTE 1 - SELETORES SIMPLES 
//1. Acesse e imprima o conteúdo do título principal (id="titulo-pagina").
let titulo = document.getElementById("titulo-pagina");
    console.log("Título principal:", titulo.innerText);

//2. Acesse a descrição abaixo do título usando a classe.
let descricao = document.getElementsByClassName("subtitulo")[0];
    console.log("Descrição:", descricao.innerText);

//3. Acesse o elemento #modulo-1 usando getElementById.
let modulo_1 = document.getElementById("modulo-1");
    console.log (modulo_1.innerText);

//4. Liste todos os elementos com a classe .tarefa usando getElementsByClassName.
console.log("TAREFAS:");
let lista_tarefas = document.getElementsByClassName("tarefa");
for (let i = 0; i < lista_tarefas.length; i++) {
  console.log (lista_tarefas[i].innerText);
}

//5. Conte quantos <li> existem no total usando getElementsByTagName.
let quant_li = document.getElementsByTagName("li");
    console.log("Quantidade de <li>:", quant_li.length);

//PARTE 2 - querySelector / querySelectorAll 
//1. Acesse o primeiro item da lista do Módulo 1 com querySelector.
console.log("-------------------------- PARTE II --------------------------");
let primeiro_item = document.querySelector("#modulo-1 li");
    console.log("Primeiro item do módulo 1:", primeiro_item.innerText);

//2. Acesse a tarefa com a classe .importante no Módulo 2.
let tarefa_importante_modulo2 = document.querySelector("#modulo-2 .importante");
    console.log("Tarefa importante do módulo 2:", tarefa_importante_modulo2.innerText);

//3. Acesse o <span> da tarefa "Funções".
 let span_funcoes = document.querySelector("#modulo-2 .importante .tag");
    console.log("Status da tarefa Funções:", span_funcoes.innerText);

//4. Liste o conteúdo dos títulos (<h2>) de cada módulo.
let titulos_h2 = document.querySelectorAll("h2");
    console.log("TÍTULOS DOS MÓDULOS:");
        titulos_h2.forEach(titulos_modulo => console.log(titulos_modulo.innerText));

//PARTE 3 - innerText, textContent, innerHTML
//1. Pegue a tarefa com a classe .importante e compare os três:
console.log("-------------------------- PARTE III --------------------------");
let elemento = document.querySelector(".importante");
    //console.log(elemento.innerText);
    //console.log(elemento.textContent);
    //console.log(elemento.innerHTML);
    
//2. Pegue #modulo-1, conte as tarefas e imprima o conteúdo de cada uma com forEach.
let modulo1 = document.getElementById("modulo-1");
let tarefasModulo1 = modulo1.querySelectorAll(".tarefa");
    console.log("Módulo 1 - Quantidade de tarefas:", tarefasModulo1.length);
        tarefasModulo1.forEach((tarefa, index) => {
    console.log(`Tarefa ${index + 1}: ${tarefa.innerText}`);});

//3. Faça o mesmo com #modulo-2, mas usando querySelectorAll.
let tarefasModulo2 = document.querySelectorAll("#modulo-2 .tarefa");
    console.log("Módulo 2 - Quantidade de tarefas:", tarefasModulo2.length);
    tarefasModulo2.forEach((tarefa, index) => {
    console.log(`Tarefa ${index + 1}: ${tarefa.innerText}`);});

//PARTE 4 - Desafios de Leitura
//1. Liste os textos de todos os elementos .tag em um array:
const tags = document.querySelectorAll('.tag');
const textos = Array.from(tags).map(el => el.innerText);

//2. Conte quantas tarefas estão com os status: pendente, visto e bloqueado.
console.log("-------------------------- PARTE IV: STATUS DAS TAREFAS --------------------------");
const pendentes  = textos.filter(t => t === 'pendente').length;
const vistos     = textos.filter(t => t === 'visto').length;
const bloqueados = textos.filter(t => t === 'bloqueado').length;
    console.log("Pendentes:", pendentes, "||| Vistos:", vistos, "||| Bloqueados:", bloqueados);

//3. Monte uma lista com formato:
    //Tarefa: Leitura e Seletores DOM - Status: em andamento
    //Tarefa: Estilos com CSS - Status: pendente
const tarefas = document.querySelectorAll('li.tarefa');

for (var i = 0; i < tarefas.length; i++) {
  var nome = tarefas[i].innerText.split('\n')[0];
  var status = tarefas[i].querySelector('.tag').innerText; 
  console.log('Tarefa: ' + nome + ' - STATUS: ' + status);
}
console.log("FIM");