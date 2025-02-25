// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Funcion para limpiar la caja del input
function limpiarCaja() {
    document.querySelector('#amigo').value = ''; 
}

// Funcion para agregar un amigo 
function agregarAmigo() {
    amigoAgregado = document.getElementById('amigo').value.trim();

    if(amigoAgregado == ''){
        alert('Por favor, inserte un nombre.');
        return; // Sale de la función si el campo está vacío
    } else {
        // Agregar el nuevo nombre al array 
        amigos.push(amigoAgregado); 
    }
    console.log(amigos);
    //Limpia el input 
    limpiarCaja();
    //Actualiza la lista 
    actualizarListaAmigos();
} 

// Funcion para actualizar la lista de amigos 

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = '';

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear el elemento <li> con el nombre del amigo
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Agrega al menos un nombre.');
        return; // Sale de la función si el arreglo está vacío
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
