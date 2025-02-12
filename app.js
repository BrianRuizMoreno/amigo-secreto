let nombres = [];
const amigoSecreto = document.querySelector(".result-list");
let intento = 0;

function agregarAmigo() {
    let campoTexto = document.querySelector("#amigo").value.toUpperCase(); // Obtener el valor del campo de texto

    if (campoTexto === "") {
        //Validar que el campo de texto no esté vacío
        Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Ingresa un nombre primero!",
            showConfirmButton: false,
            timer: 1600,
            heightAuto: false,   
            backdrop: 'static',
            scrollbarPadding: false    
        });
        amigoSecreto.textContent = "";
        return;
    } else {
        if (nombres.includes(campoTexto)) {
        //Validar que el nombre no esté repetido
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "¡El nombre ingresado ya está en la lista!",
            showConfirmButton: false,
            timer: 1600,
            heightAuto: false,   
            backdrop: 'static',
            scrollbarPadding: false  
        })
        return;
    } 
        //Agregar el nombre a la lista
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
    //Validar que haya más de un amigo en la lista
    if (nombres.length <= 1) {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "¡No hay amigos suficientes para sortear!",
            showConfirmButton: false,
            timer: 1600,
            heightAuto: false,   
            backdrop: 'static',
            scrollbarPadding: false  
        })
        return;
    }
    // Limpiar resultado anterior
    amigoSecreto.innerHTML = "";

    let indiceAleatorio = Math.floor(Math.random() * nombres.length); // Seleccionar índice ganador
    const amigoSorteado = document.createElement("li");
    amigoSorteado.style.whiteSpace = "pre-line";
    amigoSorteado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`;; // Muestra el amigo secreto
   
    amigoSecreto.appendChild(amigoSorteado); 
    startConfetti();

    intento = 1;   
    nombres = [];
    actualizarLista();
    
}

function resetearLista() {
    //Validar que haya amigos en la lista o que se haya realizado un sorteo
    if (nombres.length > 0 || intento === 1) {
        nombres = [];
        actualizarLista();
        amigoSecreto.innerHTML = "";
        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Juego Reiniciado!",
            showConfirmButton: false,
            timer: 1500,
            heightAuto: false,   
            backdrop: 'static',
            scrollbarPadding: false       
        });
        intento = 0;
    }
}

function mostrarAutor() {
    Swal.fire({
        position: "center",
        icon: "info",
        title: "¡Hecho por: Brian Ruiz Moreno!",
        html: 'Haz clic <a href="https://brianruizmoreno.github.io/Portfolio/" target="_blank" style="color: #4B69FD; font-weight: bold;">aquí</a> para más información.',
        showConfirmButton: false,
        timer: 3000,
        heightAuto: false,   
        backdrop: 'static',
        scrollbarPadding: false  
    });
}
function startConfetti() {
    confetti({
      particleCount: 1500,
      spread: 360,
      origin: { y: .3 },
      colors: ['#fee0be', '#5ff9b1', '#ff8f9b', '#eba1ff'],
    });
  }