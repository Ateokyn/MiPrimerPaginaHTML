function ingresarNumeros(n) {
    const numeros = [];

    for (let i = 0; i < n; i++) {
        const numero = parseInt(prompt(`Ingrese el valor ${i + 1}`));
        numeros.push(numero);
    }
    return numeros;
}

function calcularSuma(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

function calcularPromedio(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const promedio = calcularSuma(arr);
    return promedio / arr.length;
}

const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de numeros a ingresar: "));

const numerosIngresados = ingresarNumeros(cantidadNumeros);

const sumaTotal = calcularSuma(numerosIngresados);
const promedio = calcularPromedio(numerosIngresados);
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h2>La suma de los valores es: ${sumaTotal}</h2>
    <h2>La promedio de los valores es: ${promedio}</h2>
    
    `;