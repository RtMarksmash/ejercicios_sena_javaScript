const boton = document.getElementById("boton");
boton.addEventListener("click", insertarPersonas);

let RadioEscuchas = [];



function insertarPersonas() {

    let input = document.getElementById("inputVectores");
    const integer = parseInt(input.value)


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