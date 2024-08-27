
const texto_sin_encriptar = document.querySelector("#texto_escrito_usuario");
const texto_visualizado = document.querySelector("#texto_mensaje");

const myWidth = window.innerWidth;
const myHeight = window.innerHeight;

if (myWidth < 1026) {
    document.getElementById("texto_mensaje").style.display = "none";
}

texto_sin_encriptar.value = "";
texto_visualizado.value = "";

function boton_encriptar() {
    const texto_encriptado = encriptar_texto(texto_sin_encriptar.value)

    if (texto_encriptado == '') {

        console.log('No hace nada')
    } else {

        console.log(texto_encriptado)
        texto_visualizado.value = texto_encriptado;
        texto_sin_encriptar.value = "";


        document.getElementById("divTexto").style.visibility = "hidden";
        document.getElementById("texto_mensaje").style.backgroundImage = "none";
        document.getElementById("but_copiar").style.visibility = 'visible';
        document.getElementById("texto_mensaje").style.display = "inline";


    }
}
function boton_desencriptar() {

    const texto = desencriptar_texto(texto_sin_encriptar.value)

    if (texto == '') {

        console.log('No hace nada')
    } else {

        texto_visualizado.value = texto;
        texto_sin_encriptar.value = "";
        document.getElementById("divTexto").style.visibility = "hidden";
        document.getElementById("texto_mensaje").style.backgroundImage = "none";
        document.getElementById("but_copiar").style.visibility = 'visible';
        document.getElementById("texto_mensaje").style.display = "inline";
    }
}

function encriptar_texto(texto_cifrado) {
    texto_cifrado = texto_cifrado.toLowerCase()
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matriz.length; i++) {
        if (texto_cifrado.includes(matriz[i][0])) {
            texto_cifrado = texto_cifrado.replaceAll(matriz[i][0], matriz[i][1])

        }
    }
    return texto_cifrado;
}
function desencriptar_texto(texto_desencriptado) {
    texto_desencriptado = texto_desencriptado.toLowerCase()
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matriz.length; i++) {
        if (texto_desencriptado.includes(matriz[i][1])) {
            texto_desencriptado = texto_desencriptado.replaceAll(matriz[i][1], matriz[i][0])

        }
    }
    return texto_desencriptado;
}


function copiar_texto() {

    const cb = navigator.clipboard;
    cb.writeText(texto_visualizado.value);
    texto_visualizado.value = "";
    document.getElementById("divTexto").style.visibility = "visible";
    document.getElementById("but_copiar").style.visibility = 'hidden';
    document.getElementById("texto_mensaje").style.backgroundImage = "";


    if (myWidth < 1026) {
        document.getElementById("texto_mensaje").style.display = "none";
    }
}

