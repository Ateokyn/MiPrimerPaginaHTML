class Stack{
    constructor(){
        this.pila=[];

    }

    push(dato){
        this.pila.push(dato);
        return this.pila;
    }

    pop(){
        return this.pila.pop;
    }
    peek(){
        return this.pila[this.pila.length-1];
    }
    size(){
return this.pila.length;
    }

    print(){
        datos.innerHTML+="<h2> Datos en pilas: </h2>"+this.pila;
    }

}

var datos = document.getElementById("datos");
const stack = new Stack();

datos.innerHTML+="<h2>Cantidad de datos en pila: </h2>" + stack.size();

stack.push('Kenny Tellez');
stack.push('Daniela herrera');

datos.innerHTML+="<h2>Cantidad de datos en pila: </h2>" + stack.size();
stack.print();

datos.innerHTML+="<h2>Dato en la cima: </h2>" + stack.peek();

stack.pop();
stack.print();