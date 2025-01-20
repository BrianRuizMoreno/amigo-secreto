// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {
    let campoTexto = document.querySelector("#amigo").value; // Obtener el valor del campo de texto
    if (campoTexto === "") {
        alert("Por favor, ingrese un nombre válido");
    } else {
        nombres.push(campoTexto);
        document.querySelector("#amigo").value = ""; // Limpiar el campo de texto
        actualizarLista(); // Actualizar la lista en el HTML
    }
}

function actualizarLista() {
    const listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre; // Crear un nuevo elemento de lista
        listaAmigos.appendChild(li); // Agregarlo a la lista
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSorteado = nombres[indiceAleatorio];
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`; // Mostrar el resultado
}
