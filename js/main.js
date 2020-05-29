
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let pantalla = document.getElementById("pantalla");
let botonSuma = document.getElementById("botonSuma");
let botonIgual = document.getElementById("botonIgual");
let numero1;
let numero2;

boton1.addEventListener("click", añadeNumero1);
boton2.addEventListener("click", añadeNumero2);

boton1.value = 1;
boton2.value = 2;

function añadeNumero1(){
    pantalla.innerText += boton1.value;
};

function añadeNumero2(){
    pantalla.innerText += boton2.value;
};

 botonSuma.addEventListener("click", suma);
 botonIgual.addEventListener("click", igual);

function suma () {
    numero1 = Number(pantalla.innerText);
    pantalla.innerText += " + ";
    pantalla.innerText = "";
    console.log(numero1)
}

function igual(){
    numero2 = Number(pantalla.innerText);
    pantalla.innerText = "";
    pantalla.innerText = numero1 + numero2;
    console.log(numero2)
}