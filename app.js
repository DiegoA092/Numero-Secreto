/*
Codigo para juego de numero secreto
Curso 2, Etapa 2 de ONE
Logica de programacion: explorar funciones y listas
*/

/*
ACTIVIDADES:
1. COLOCAR UN LIMITADOR AL JUEGO PARA NO TENER QUE BARRER CON TODOS LOS NUMEROS
agregar niveles de dificultad?
una ves que termines los 10, pasar a 20, luego 30 y etc
2. Poner numero maximo de intentos y reiniciar juego
a. Encuentra todos los numeros del 1 al 10 en max 3 intentos, si no se consigue reiniciar, si se logra pasar al siguiente nivel
b. Encuentra numeros de una secuencia de numeros aleatorio (el numero maximo tambien es aleatorio)
*/

let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
   }

   function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Preguntar si ya sorteamos todos los numeros
    if (listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', `Ya se sortearon todos los numeros del 1 al ${numeroMaximo}`);
        document.getElementById('siguienteNivel').removeAttribute('disabled');
        //siguienteNivel();
        //listaDeNumerosSorteados = [];
        //return reiniciarJuego();
    } else {
    //Si numero generado esta en la listaDeNumerosSorteados generar nuevo
        if (listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaDeNumerosSorteados.push(numeroGenerado);
            console.log(listaDeNumerosSorteados);
            return numeroGenerado;
        }
}
}
function siguienteNivel(){
numeroMaximo = numeroMaximo * 2;
listaDeNumerosSorteados = [];
asignarTextoElemento('p', `Selecciona un numero del 1 al ${numeroMaximo}`);
intentos = 1;
numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
document.querySelector('#siguienteNivel').setAttribute('disabled', true);
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste, el numero es: ${numeroSecreto}. Lo conseguiste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es menor');
    }   else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    
}
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego de numero secreto');
    asignarTextoElemento('p', `Selecciona un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //generar nuevo numero aleatorio
    //reiniciar numero de intentos
    //indicar mensaje de solcitud de numero del 1 a 10
    condicionesIniciales();
    //desactivar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

