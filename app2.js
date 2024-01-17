const button = document.querySelector('button');
const color = document.getElementById('color');
const color2 = document.getElementById('color-rgb');

// FUNCION PARA GENERAR COLOR HEXADECIMAL ALEATORIAMENTE
function generarColorAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiRandom = Math.floor(Math.random() * 16);
        colorHex += digitos[indiRandom];
    }
    return colorHex;
}

// FUNCION PARA TRANSFORMAR COLOR HEXADECIMAL A RGB
function hexToRgb(hex) {
    hex = hex.slice(1);
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return `RGB(${r}, ${g}, ${b})`;
}

// OBTENER LOS ELEMENTOS DEL DOM
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// ACTUALIZAR EL VALOR DE LOS PÁRRAFOS EN LOS SLIDERS RGB
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// FUNCION PARA ACTUALIZAR EL COLOR
function actualizarColor(rojo, verde, azul){
    const colorHex = `#${componentToHex(rojo)}${componentToHex(verde)}${componentToHex(azul)}`;
    color.textContent = colorHex; // ACTUALIZAR TEXTO DE COLOR HEX
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
    color2.textContent = `RGB(${rojo}, ${verde}, ${azul})`; // ACTUALIZAR TEXTO DE COLOR RGB
}

// EVENTO DE CAMBIO PARA SLIDER ROJO
inputRojo.addEventListener('input', () => {
    rojo = inputRojo.value;
    textoRojo.innerText = rojo; // ACTUALIZAR VALOR DEL TEXTO ROJO
    actualizarColor(rojo, verde, azul);
});

// EVENTO DE CAMBIO PARA SLIDER VERDE
inputVerde.addEventListener('input', () => {
    verde = inputVerde.value;
    textoVerde.innerText = verde; // ACTUALIZAR VALOR DEL TEXTO VERDE
    actualizarColor(rojo, verde, azul);
});

// EVENTO DE CAMBIO PARA SLIDER AZUL
inputAzul.addEventListener('input', () => {
    azul = inputAzul.value;
    textoAzul.innerText = azul; // ACTUALIZAR VALOR DEL TEXTO AZUL
    actualizarColor(rojo, verde, azul);
});

// EVENTO AL PRESIONAR EL BOTÓN PARA GENERAR COLOR ALEATORIO
button.addEventListener('click', () => {
    let colorAleatorio = generarColorAleatorio();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
    color2.textContent = hexToRgb(colorAleatorio);

    // OBTENER LOS VALORES RGB DEL COLOR ALEATORIO
    rojo = parseInt(colorAleatorio.substring(1, 3), 16);
    verde = parseInt(colorAleatorio.substring(3, 5), 16);
    azul = parseInt(colorAleatorio.substring(5, 7), 16);

    // ACTUALIZAR LOS VALORES DE LOS SLIDERS Y LOS TEXTOS CORRESPONDIENTES
    inputRojo.value = rojo;
    inputVerde.value = verde;
    inputAzul.value = azul;

    textoRojo.innerText = rojo; // ACTUALIZAR VALOR DEL TEXTO ROJO
    textoVerde.innerText = verde; // ACTUALIZAR VALOR DEL TEXTO VERDE
    textoAzul.innerText = azul; // ACTUALIZAR VALOR DEL TEXTO AZUL

    actualizarColor(rojo, verde, azul);
});

// FUNCION PARA CONVERTIR COMPONENTE RGB A SU VALOR HEXADECIMAL
function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
