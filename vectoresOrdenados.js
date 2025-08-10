const boton = document.getElementById("boton");
boton.addEventListener("click", ordenar);

// pd: este aalgoritmo daña cualquier tipo de buenas practicas en el codigo jajajaja
//este va con el index3.html
let vector1 = [];
let vector2 = [];


function ordenar() {

    let input = document.getElementById("inputVectores");
    const integer = parseInt(input.value)


    if (vector1.length > 4) {
        /*  if (vector2.length > 4) {
             return alert("superaste el limite maximo son 5 numeros por cada vector")
         } */
        vector2.push(integer)
        let vectorOrdenado2 = vector2.sort((a, b) => a - b);
        console.log(vectorOrdenado2);
        input.value = "";
        const vectorFinal = vector1.concat(vector2);
        //console.log("vector final: " + vectorFinal);
        const vectorFinalOrdenado = vectorFinal.sort((a, b) => a - b)
        console.log("vector final ordenado: " + vectorFinalOrdenado)
        if (vector2.length > 4) {
            return alert(" este es el resultado despues de unir los dos vectores: " + vectorFinalOrdenado)
        }
        return;
        //return alert("superaste el limite maximo son 5 numeros")
    };

    vector1.push(integer);

    let vectorOrdenado = vector1.sort((a, b) => a - b);

    console.log(vectorOrdenado)

    input.value = "";

};