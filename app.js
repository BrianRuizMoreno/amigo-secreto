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
    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.textContent = nombres[i]; // Crear un nuevo elemento de lista
        listaAmigos.appendChild(li); // Agregarlo a la lista
    }    
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const listaItems = document.querySelectorAll("#listaAmigos li"); // Limpiar cualquier estilo previo
    listaItems.forEach(item => item.classList.remove("ganador"));

    const indiceAleatorio = Math.floor(Math.random() * nombres.length); // Seleccionar ganador
    const amigoSorteado = nombres[indiceAleatorio];

    listaItems[indiceAleatorio].classList.add("ganador"); // Añadir clase para resaltar al ganador

    const resultado = document.querySelector("#resultado"); // Mostrar el nombre del ganador
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}


function resetearLista() {
    nombres = [];
    actualizarLista();
    document.querySelector("#resultado").innerHTML = "";
}
