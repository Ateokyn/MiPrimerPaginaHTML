var a, b, suma, resta;
a = prompt("Ingresa un valor entero");
b = prompt("Ingresa un valor entero");

//Funcion para retornar el mayor de los numeros entre a y b.
function DeterminarMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//Funcion para realizar un secuencia de la a asta la b.
function secuencia(a, b) {
    const secuencia = [];

    if (a <= b) {
        for (let i = a; i <= b; i++) {
            secuencia.push(i);
        }
    }
    return secuencia;
}

suma = parseInt(a) + parseInt(b);
resta = parseInt(a) - parseInt(b);
const numeroMayor = DeterminarMayor(a, b);
const secuenciaNumeros = secuencia(a, b);


var datos = document.getElementById("datos");
datos.innerHTML = `
    <h2>La suma de los valores ${a} y ${b} es: ${suma}</h2>
    <h2>La resta de los valores ${a} y ${b} es: ${resta}</h2>
    <h2>El mayor de los valores ${a} y ${b} es: ${numeroMayor}</h2>
    <h2>La secuencia de los valores ${a} y ${b} es: ${secuenciaNumeros.join(',')}</h2>
    
    `;