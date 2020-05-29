
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");
let boton7 = document.getElementById("boton7");
let boton8 = document.getElementById("boton8");
let boton9 = document.getElementById("boton9");
let boton0 = document.getElementById("boton0");
let botonClear = document.getElementById("botonClear");
let pantalla = document.getElementById("pantalla");
let botonSuma = document.getElementById("botonSuma");
let botonIgual = document.getElementById("botonIgual");
let botonMultiplicacion = document.getElementById("botonMultiplicacion");
let botonDivision = document.getElementById("botonDivision");
let chivatoOperador = document.getElementById("chivatoOperador")

boton1.addEventListener("click", añadeNumero1);
boton2.addEventListener("click", añadeNumero2);
boton3.addEventListener("click", añadeNumero3);
boton4.addEventListener("click", añadeNumero4);
boton5.addEventListener("click", añadeNumero5);
boton6.addEventListener("click", añadeNumero6);
boton7.addEventListener("click", añadeNumero7);
boton8.addEventListener("click", añadeNumero8);
boton9.addEventListener("click", añadeNumero9);
boton0.addEventListener("click", añadeNumero0);

boton1.value = 1;
boton2.value = 2;
boton3.value = 3;
boton4.value = 4;
boton5.value = 5;
boton6.value = 6;
boton7.value = 7;
boton8.value = 8;
boton9.value = 9;
boton0.value = 0;

let numero1;
let numero2;

function añadeNumero1(){
    pantalla.innerText += boton1.value;
};
function añadeNumero2(){
    pantalla.innerText += boton2.value;
};
function añadeNumero3(){
    pantalla.innerText += boton3.value;
};
function añadeNumero4(){
    pantalla.innerText += boton4.value;
};
function añadeNumero5(){
    pantalla.innerText += boton5.value;
};
function añadeNumero6(){
    pantalla.innerText += boton6.value;
};
function añadeNumero7(){
    pantalla.innerText += boton7.value;
};
function añadeNumero8(){
    pantalla.innerText += boton8.value;
};
function añadeNumero9(){
    pantalla.innerText += boton9.value;
};
function añadeNumero0(){
    pantalla.innerText += boton0.value;
};

botonSuma.addEventListener("click", var1);
botonSuma.addEventListener("click", suma);
botonSuma.addEventListener("click", clear);
botonResta.addEventListener("click", var1);
botonResta.addEventListener("click", resta);
botonResta.addEventListener("click", clear);
botonMultiplicacion.addEventListener("click", var1);
botonMultiplicacion.addEventListener("click", multiplicacion);
botonMultiplicacion.addEventListener("click", clear);
botonDivision.addEventListener("click", var1);
botonDivision.addEventListener("click", division);
botonDivision.addEventListener("click", clear);
botonIgual.addEventListener("click", var2);
botonIgual.addEventListener("click", igual);
botonClear.addEventListener("click", clear);

function var1() {
    numero1 = Number(pantalla.innerText);
}

function var2() {
    numero2 = Number(pantalla.innerText);
}

function igual(){
    if(chivatoOperador.textContent == "+"){
        chivatoOperador.innerText = "=";
        pantalla.innerText = numero1 + numero2;
    } else if (chivatoOperador.textContent == "-"){
        chivatoOperador.innerText = "=";
        pantalla.innerText = numero1 - numero2;
    } else if (chivatoOperador.textContent == "x"){
        chivatoOperador.innerText = "=";
        pantalla.innerText = numero1 * numero2;
    } else if (chivatoOperador.textContent == "/"){
        chivatoOperador.innerText = "=";
        pantalla.innerText = numero1/numero2;
    } else {
        pantalla.innerText = "No es posible hacer esa operación."
    }
}

function clear() {
    pantalla.innerText = "";
}

function suma() {
    chivatoOperador.innerText = "+";
}

function resta() {
    chivatoOperador.innerText = "-";
}

function multiplicacion() {
    chivatoOperador.innerText = "x";
}

function division() {
    chivatoOperador.innerText = "/";
}