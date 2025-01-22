let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaDeTarefas")) || [];

function salvarTarefas() {
    listElement.innerHTML = "";
    tarefas.map((resultado) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(resultado);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(resultado);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    });
}

salvarTarefas();

function adicionarTarefas() {
    if (inputElement.value === ``) {
        alert("Digite uma tarefa");
        return false;
    } else {
        let tarefaText = inputElement.value;
        tarefas.push(tarefaText);
        inputElement.value = "";

        salvarTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);

    salvarTarefas();
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("@listaDeTarefas", JSON.stringify(tarefas));
}
