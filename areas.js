
//botones para ejecutar el programa

const boton = document.getElementById("boton");
boton.addEventListener("click", area);
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", perimetro);


// funcion de area 

function area(area) {

    let tipoDeArea = document.getElementById("tipoDeArea").value;

    area = tipoDeArea

    switch (area) {

        case "cuadrado":
            let l1 = prompt("lado 1 del cuadrado");
            let l2 = prompt("lado 2 del cuadrado");
            let resultadoCudrado = l1 * l2
            return alert(resultadoCudrado)
            break
        case "rectangulo":
            let base = prompt("base del rectangulo");
            let altura = prompt("altura  del rectangulo");
            let resultadoRectangulo = base * altura
            return alert(resultadoRectangulo)
            break
        case "triangulo":
            let baseT = prompt("base del triangulo");
            let alturaT = prompt("altura  del trinagulo");
            let resultadoTriangulo = (baseT * alturaT) / 2
            return alert(resultadoTriangulo)
            break
        case "circulo":
            let radio = prompt("radio del circulo");
            let resultadoCirculo = ((radio * radio) * 2) * 3.1416
            return alert(resultadoCirculo)
            break
        default:
            4
            alert("intentelo de nuevo no hay coincidencias")

    }


};

// funcion de perimetro al igual que el area dependiendo de lo que escriban es lo que el programa le solicitara de datos

function perimetro(perimetro) {

    let tipoDePerimetro = document.getElementById("Perimetro").value;

    perimetro = tipoDePerimetro

    switch (perimetro) {

        case "cuadrado":
            let l1 = prompt("lado 1 del cuadrado");
            let resultadoCudrado = 4 * (l1)
            return alert(resultadoCudrado)
            break
        case "rectangulo":
            let base = prompt("base del rectangulo");
            let altura = prompt("altura  del rectangulo");
            let resultadoRectangulo = (base + altura) * 2
            return alert(resultadoRectangulo)
            break
        case "triangulo":
            let lado1 = prompt("lado 1 del triangulo");
            let lado2 = prompt("lado 2  del trinagulo");
            let lado3 = prompt("lado 3 del triangulo");
            let resultadoTriangulo = lado1 + lado2 + lado3
            return alert(resultadoTriangulo)
            break
        case "circulo":
            let radio = prompt("radio del circulo");
            let resultadoCirculo = (radio * radio) * 3.1416
            return alert(resultadoCirculo)
            break
        default:
            alert("intentelo de nuevo no hay coincidencias")

    }

};


/*  if (area == "cuadrado") {
     let l1 = prompt("lado1 del cuadrado");
     let l2 = prompt("lado1 del cuadrado");
     let resultadoCudrado = l1 * l2
    return alert(resultadoCudrado)
 }; */