let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

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

function adicionarTarefas() {
    if (inputElement.value === ``) {
        alert("Digite uma tarefa");
        return false;
    } else {
        let tarefaText = inputElement.value;
        tarefas.push(tarefaText);
        inputElement.value = "";
        salvarTarefas();
    }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    salvarTarefas();
}
