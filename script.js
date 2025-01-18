let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function salvarTarefas() {
    listElement.innerHTML = "";
    tarefas.map((resultado) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(resultado);

        liElement.appendChild(tarefaText);
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
