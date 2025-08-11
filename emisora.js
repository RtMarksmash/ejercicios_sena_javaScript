const boton = document.getElementById("boton");
boton.addEventListener("click", insertarPersonas);
const botonBusqueda = document.getElementById("botonBusqueda");
botonBusqueda.addEventListener("click", buscarRadioEscuchas);


let RadioEscuchas = [];



function insertarPersonas() {

    const id = Math.floor(Math.random() * 10000) + 1;

    let inputNombre = document.getElementById("nombre");
    const nombre = inputNombre.value
    let inputCedula = document.getElementById("cedula");
    const cedula = parseInt(inputCedula.value)
    let inputFecha = document.getElementById("fecha");
    const fecha = inputFecha.value
    let inputEmail = document.getElementById("email");
    const email = inputEmail.value
    let inputResidencia = document.getElementById("residencia");
    const residencia = inputResidencia.value
    let inputOrigen = document.getElementById("origen");
    const origen = inputOrigen.value
    let inputArtista = document.getElementById("artista");
    const artista = inputArtista.value
    let inputFavorito1 = document.getElementById("favorito1");
    const favorito1 = inputFavorito1.value
    let inputFavorito2 = document.getElementById("favorito2");
    const favorito2 = inputFavorito2.value
    let inputFavorito3 = document.getElementById("favorito3");
    const favorito3 = inputFavorito3.value


    const persona = {
        id: id,
        nombre: nombre,
        cedula: cedula,
        fechaDeNacimiento: fecha,
        email: email,
        ciudadDeResidencia: residencia,
        ciudadDeOrigen: origen,
        artista: {
            nombre: artista,
            CancionesFavoritas: [favorito1, favorito2, favorito3]
        }
    };

    if (RadioEscuchas.length > 5) {
        return alert(" haz superado el maximo permitido en esta rifa es de 6 persona");

    };

    RadioEscuchas.push(persona);

    console.log(RadioEscuchas);
    //console.log(RadioEscuchas.artista)

    inputNombre.value = "";
    inputCedula.value = "";
    inputFecha.value = "";
    inputEmail.value = "";
    inputResidencia.value = "";
    inputOrigen.value = "";
    inputArtista.value = "";
    inputFavorito1.value = "";
    inputFavorito2.value = "";
    inputFavorito3.value = "";

};


function buscarRadioEscuchas() {

    let input = document.getElementById("busqueda");
    const numeroEncuestado = input.value


    if (isNaN(numeroEncuestado) || numeroEncuestado < 0 || numeroEncuestado >= RadioEscuchas.length) {
        alert("Índice no válido o no hay persona en esa posición.");
        return;
    }

    const mostrar = RadioEscuchas[numeroEncuestado];

    alert(`el radio escucha solicitado es: 
        nombre: ${mostrar.nombre}
        cedula: ${mostrar.cedula}
        fecha de nacimiento: ${mostrar.fechaDeNacimiento}
        email: ${mostrar.email}
        ciudad de residencia: ${mostrar.ciudadDeResidencia}
        ciudad de origen: ${mostrar.ciudadDeOrigen}
        nombre del artista favorito: ${mostrar.artista.nombre}
        cancion favorita 1: ${mostrar.artista.CancionesFavoritas[0]}
        cancion favorita 2: ${mostrar.artista.CancionesFavoritas[1]}
        cancion favorita 3: ${mostrar.artista.CancionesFavoritas[2]}
        ganador de la rifa entre los encuestados`)

}