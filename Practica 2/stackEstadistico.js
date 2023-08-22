class Stack {
  constructor() {
    this.elementos = [];

  }

  agregar(elementos) {
    this.elementos.push(elementos);
  }

  quitar() {
    if (this.estaVacia()) {
      return "Insuficiente";

    }
    return this.elementos.pop();

  }

  cima() {
    if (this.estaVacia()) {
      return "No hay elementos en el stack"
    }
    return this.elementos(this.elementos.length - 1);
  }

  estaVacia() {
    return this.elementos.length === 0;
  }

  tamano() {
    return this.elementos.length;
  }
}

function calcularEstadisticas(stack) {
  let cantidadNegativos = 0;
  let cantidadMayores = 0;
  let sumaPositivos = 0;
  let cantidadPositivos = 0;

  while (!stack.estaVacia()) {
    const numero = stack.quitar();

    if (numero < 0) {
      cantidadNegativos++;
    } else if (numero > 10) {
      cantidadMayores++;
    } else if (numero >= 0) {
      sumaPositivos += numero;
      cantidadPositivos++;
    }
  }

  const promedioPositivos = cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 0;

  return {
    cantidadNegativos,
    cantidadMayores,
    promedioPositivos,
  };
}

function principal() {
  var datos = document.getElementById("datos");
  const stack = new Stack();

  const n = parseInt(prompt("Ingrese la cantidad de numeros:"));

  for (let i = 0; i < n; i++) {
    const numero = parseInt(prompt(`Ingrese el numero ${i + 1} : `));
    stack.agregar(numero);
  }

  const estadisticas = calcularEstadisticas(stack);

  datos.innerHTML += "<h2>Cantidad de numeros negativos: </h2>" + estadisticas.cantidadNegativos;
  datos.innerHTML += "<h2>Cantidad de numeros mayores a 10: </h2>" + estadisticas.cantidadMayores;
  datos.innerHTML += "<h2>Promedio de numeros positivos: </h2>" + estadisticas.promedioPositivos;
  datos.innerHTML += "<h2>Cuantos datos quedaron en la pila despues de hacer las operaciones anteriores? </h2>";
  datos.innerHTML += "<h4>La pila va vaciando a medida que se realizan las operaciones para calcular las estadisticas.</h4>";
  datos.innerHTML += "<h4>Por lo tanto, despues de realizar las operaciones anteriores, no quedara ningun dato en la pila.</h4>";
  datos.innerHTML += "<h6>No le entiendo muy bien prof xD, ise mi maximo esfuerzo.</h6>";
  datos.innerHTML += "<h5>Derechos Reservados | Copyright 2023</h5>";
}
principal();