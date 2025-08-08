const boton = document.getElementById("boton");
boton.addEventListener("click", arrayEdades);

let edades = [];
//let contador = 0;

function arrayEdades() {

    let input = document.getElementById("edad").value;
    const integer = parseInt(input)

    if (0 > integer || integer > 120) {
        alert("debes introducir un dato entre 1 y 120 años")
        return;
    }

    if (edades.length > 9) {
        return alert(`superaste los numeros requeridos ${edades.join("-")}`)
    }

    edades.push(integer)

    const menoresDeEdad = edades.filter(edad => edad < 18);
    const mayoresDeEdad = edades.filter(edad => edad >= 18 && edad < 60);


    console.log(edades)
    console.log(menoresDeEdad);
    console.log(mayoresDeEdad);
    alert("cleared")

};