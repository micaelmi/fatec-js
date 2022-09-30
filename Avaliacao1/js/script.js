let alerta = document.getElementById("ativarAlerta")

let numero = document.getElementById("numero")
let resultado = document.getElementById("resultadoSoma")
let calcular = document.getElementById("calcular")
let contas = document.getElementById("contas")

let entradaTexto = document.getElementById("entradaTexto")
let inverter = document.getElementById("inverter")
let textoInvertido = document.getElementById("textoInvertido")

let campoNome = document.getElementById("nome")
let campoTelefone = document.getElementById("telefone")
let cadastrar = document.getElementById("cadastrar")
let contatos = document.getElementById("contatos")
let erroNome = document.getElementById("erroNome")
let erroTelefone = document.getElementById("erroTelefone")

//Questão 1
alerta.addEventListener("click", function () {
    alert("Questão 1: Esse é um alerta")
})

// Questão 3
let soma
function SomaNumeros(numero) {
    if (numero > 0 && !isNaN(numero)) {
        soma = 0
        contas.textContent = " "
        for (let i = 0; i <= numero; i++) {
            soma += i
            contas.textContent += i
            if (i < numero) contas.textContent += " + "
        }
        resultado.textContent = "Resultado = " + soma
    } else {
        resultado.textContent = "Digite um número positivo"
        contas.textContent = ""
    }
}

calcular.addEventListener("click", function () {
    SomaNumeros(numero.value)
})

// Questão 5
function InverteTexto(texto) {
    let textoSeparado
    textoSeparado = texto.split("")
    textoInvertido.textContent = "Texto Invertido: " + textoSeparado.reverse().join("")
}

inverter.addEventListener("click", function () {
    InverteTexto(entradaTexto.value)
})

// Questão 7
function ValidaNome(nome) {
    if (nome.length > 0 && isNaN(nome)) {
        erroNome.textContent = ""
        return true
    } else {
        if (nome.length <= 0) {
            erroNome.textContent = "Este campo está vazio"
        } else
            if (!isNaN(nome)) {
                erroNome.textContent = "Deve conter letras"
            }
        return false
    }
}

function ValidaTelefone(tel) {
    if (tel.length >= 8 && tel.length <= 11 && !isNaN(tel)) {
        erroTelefone.textContent = ""
        return true
    } else {
        if (isNaN(tel)) {
            erroTelefone.textContent = "Este campo só aceita números"
        } else
            if (tel.length < 8) {
                erroTelefone.textContent = "Necessario pelo menos 8 dígitos"
            } else
                if (tel.length > 11) {
                    erroTelefone.textContent = "Máximo de 11 números"
                }

        return false
    }
}


cadastrar.addEventListener("click", function () {
    let nomeOK = ValidaNome(campoNome.value)
    let telOK = ValidaTelefone(campoTelefone.value)
    if (nomeOK == true && telOK == true) {
        contatos.textContent += "Nome: " + campoNome.value + "\nTelefone: " +
            campoTelefone.value + "\n\n"
    }
})