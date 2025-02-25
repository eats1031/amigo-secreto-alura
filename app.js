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

} 
