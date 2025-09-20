// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let sorteoRealizado = false;
let contenedorDeAmigos = [];



function agregarAmigo() {
    
    if (sorteoRealizado) {
        alert('No se pueden agregar mas nombres despues del sorteo')
        return;
    }

    const amigosIngresados = document.getElementById('amigo').value;

    if (amigosIngresados !== "" ) {
        contenedorDeAmigos.push(amigosIngresados);
        document.getElementById('amigo').value = '';
        
        crearListahtml();

    } else {
        alert('Porfa ingresar un nombre')

    }
}



function crearListahtml() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    contenedorDeAmigos.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaHTML.appendChild(li);
    })
}



function validarSiHayAmigos() {
    if(contenedorDeAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }
}



function hayConcidencias(arr1, arr2) {
    for (let i = 0 ; i < arr1.length ; i++ ) {
        if (arr1[i] === arr2[i]) {
            return true;
        }
    }
    return false;

}



function sortearAmigo() {

    if (sorteoRealizado) {
        alert('El sorteo ya se realizo no se puede repetir')
        return;
    } 

    if (contenedorDeAmigos.length < 2) {
        alert('se necesitan almenos 2 personas para el sorteo');
    }

    let copia;

    do {
        copia = [...contenedorDeAmigos];
        copia.sort(() => Math.random() - 0.5);
    } while (hayConcidencias(contenedorDeAmigos, copia));

    document.getElementById('resultado').innerHTML = '';

    for (let i = 0 ; i < contenedorDeAmigos.length ; i++ ) {
        let quienRegala = contenedorDeAmigos[i]; 
        let quienRecibe = copia[i];

        let mensaje = `${quienRegala} regala a ${quienRecibe}`;

        let ulResultado = document.getElementById('resultado');
        let li = document.createElement('li');
        li.textContent = mensaje;
        ulResultado.appendChild(li);
    }
    sorteoRealizado = true;
}



function reiniciarJuego() {
    contenedorDeAmigos = [];
    sorteoRealizado = false;

    document. getElementById('amigo').value = '';
    
    document. getElementById('listaAmigos').innerHTML = '';
    document. getElementById('resultado').innerHTML = '';

}

