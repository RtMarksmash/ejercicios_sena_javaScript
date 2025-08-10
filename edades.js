const boton = document.getElementById("boton"); // este boton esta en el index2 
boton.addEventListener("click", arrayEdades); // cree eso asi por que es mas facil tener un input recibiendo datos 

let edades = [];
let contador = 10;

function arrayEdades() {

    let input = document.getElementById("edad");
    const integer = parseInt(input.value)

    if (0 > integer || integer > 120) {
        alert("debes introducir un dato entre 1 y 120 años")
        return;
    }

    if (edades.length > 9) {
        return alert(`superaste los numeros requeridos ${edades.join("-")}`)
    }

    edades.push(integer)

    input.value = "";

    const menoresDeEdad = edades.filter(edad => edad < 18);
    const mayoresDeEdad = edades.filter(edad => edad >= 18 && edad < 60);
    const adultosMayores = edades.filter(edad => edad >= 60);
    const sumaArray = edades.reduce((acumulador, numero) => acumulador + numero, 0);
    const promedio = sumaArray / edades.length;
    const mayorEdad = edades.reduce((max, num) => num > max ? num : max, edades[0]);
    const menorEdad = edades.reduce((min, num) => num < min ? num : min, edades[0]);


    /*  console.log("edades: " + edades.join(","));
     console.log("pormedio: " + promedio);
     console.log("numero mayor" + mayorEdad); */
    /* console.log(menoresDeEdad);
    console.log(mayoresDeEdad); */

    let cantidadFaltante = contador - edades.length

    alert("dato insertado puedes insertar : " + cantidadFaltante + " veces mas")

    if (edades.length === 10) {
        return alert(`cant. mayores de edad: ${mayoresDeEdad.length}  
                cant. menores de edad: ${menoresDeEdad.length} 
                cant. adultos mayores: ${adultosMayores.length}
                la mayor edad: ${mayorEdad}
                la menor edad: ${menorEdad} 
                promedio de edad: ${promedio} años

                `)
    };

};