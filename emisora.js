const boton = document.getElementById("boton");
boton.addEventListener("click", insertarPersonas);

let RadioEscuchas = [];



function insertarPersonas() {

    let inputNombre = document.getElementById("nombre");
    const nombre = inputNombre.value
    let inputCedula = document.getElementById("cedula");
    const cedula = parseInt(inputCedula.value)
    let inputFecha = document.getElementById("fecha");
    const fecha = inputFecha.value
    let inputEmail = document.getElementById("email");
    const email = inputEmail.value
    let inputResidencia = document.getElementById("inputVectores");
    const residencia = inputResidencia.value
    let inputOrigen = document.getElementById("inputVectores");
    const origen = inputOrigen.value




    const persona = {
        id: 1,
        nombre: "jorge",
        fechaDeNacimiento: "22-10-2009",
        email: "jdfakhf@adhfasdhf",
        ciudadDeResidencia: "cucuta",
        ciudadDeOrigen: "cucuta",
        artista: {
            nombre: "",
            CancionesFavoritas: []
        }
    }
}