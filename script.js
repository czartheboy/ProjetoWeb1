console.log('Hello World');

function add () {
    alert("Adicionando produto");
}

function addproduto () {
    var container = document.getElementById("container-add");

    container.style.display = "block";
}

function fecharAdd () {
    var container = document.getElementById("container-add");
    container.style.display = "none";
}