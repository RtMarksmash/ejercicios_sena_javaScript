const boton = document.getElementById("boton");
boton.addEventListener("click", insertarPersonas);

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
            CancionesFavoritas: [favorito1,favorito2,favorito3]
        }
    };


    RadioEscuchas.push(persona);

    console.log(RadioEscuchas);
}