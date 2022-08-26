// MOSTRADORES
let mostrador = document.getElementById("mostrador")
let operador = document.getElementById("operador")
let numeroAuxiliar = document.getElementById("numeroAuxiliar")
// NÚMEROS
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")
let b0 = document.getElementById("b0")
let b00 = document.getElementById("b00")
let ponto = document.getElementById("ponto") // ponto
// OPERAÇÕES
let mais = document.getElementById("mais")
let menos = document.getElementById("menos")
let multi = document.getElementById("multi")
let divi = document.getElementById("divi")
let raiz = document.getElementById("raiz")
let quadrado = document.getElementById("quadrado")
let elevado = document.getElementById("elevado")
let porcentagem = document.getElementById("porcentagem")
let pi = document.getElementById("pi")
let igual = document.getElementById("igual") // igual
// LIMPADORES
let apaga = document.getElementById("apaga")
let limpa = document.getElementById("limpa")

const PI = 3.141592653589793238462643383279502884197

// DIGITAÇÃO
function digito(valor) {
    if (mostrador.value !== "0") {
        mostrador.value = mostrador.value + valor
    } else {
        mostrador.value = valor
    }
}
// OPERAÇÕES
function operacao(valor) {
    if (operador.value === "=") {
        numeroAuxiliar.value = "0"
        operador.value = valor
        numeroAuxiliar.value = mostrador.value
        mostrador.value = "0"
    }
    if (operador.value !== "") {
        operador.value = valor
    } else {
        operador.value = valor
        numeroAuxiliar.value = mostrador.value
        mostrador.value = "0"
    }
}
// FAZ AS CONTAS E MOSTRA O RESULTADO
function igualdade() {
    if (operador.value === "-") { // CONTA DE MENOS
        let aux = 0
        aux = mostrador.value
        mostrador.value = numeroAuxiliar.value - mostrador.value
        numeroAuxiliar.value = numeroAuxiliar.value + " - "
            + aux
        operador.value = "="
    }
    if (operador.value === "+") { // CONTA DE MAIS
        let aux = 0
        aux = mostrador.value
        mostrador.value =
            parseFloat(numeroAuxiliar.value) + parseFloat(mostrador.value)
        numeroAuxiliar.value = numeroAuxiliar.value + " + "
            + aux
        operador.value = "="
    }
    if (operador.value === "÷") { // CONTA DE DIVISÃO
        let aux = 0
        aux = mostrador.value
        mostrador.value = numeroAuxiliar.value / mostrador.value
        numeroAuxiliar.value = numeroAuxiliar.value + " ÷ "
            + aux
        operador.value = "="
    }
    if (operador.value === "×") { // CONTA DE MULTIPLICAÇÃO
        let aux = 0
        aux = mostrador.value
        mostrador.value = numeroAuxiliar.value * mostrador.value
        numeroAuxiliar.value = numeroAuxiliar.value + " × "
            + aux
        operador.value = "="
    }
    if (operador.value === "√") { // CONTA DE RAIZ QUADRADA
        aux = mostrador.value
        mostrador.value = Math.sqrt(numeroAuxiliar.value)
        numeroAuxiliar.value = "√" + numeroAuxiliar.value
        operador.value = "="
    }
    if (operador.value === "x²") { // CONTA DE ELEVADO A 2
        aux = mostrador.value
        mostrador.value = (numeroAuxiliar.value) * (numeroAuxiliar.value)
        numeroAuxiliar.value = numeroAuxiliar.value + "²"
        operador.value = "="
    }
    if (operador.value === "xʸ") { // CONTA DE ELEVADO A 2
        aux = mostrador.value
        mostrador.value = (numeroAuxiliar.value) ** (mostrador.value)
        numeroAuxiliar.value = numeroAuxiliar.value + "²"
        operador.value = "="
    }
    if (operador.value === "%") { // CONTA DE PORCENTAGEM
        aux = mostrador.value
        mostrador.value = (numeroAuxiliar.value / 100) * (mostrador.value)
        numeroAuxiliar.value = numeroAuxiliar.value + "%×" + mostrador.value
        operador.value = "="
    }
    if (operador.value === "π") { // CONTA DE PORCENTAGEM
        aux = mostrador.value
        mostrador.value = PI * (numeroAuxiliar.value)
        numeroAuxiliar.value = numeroAuxiliar.value + "×π"
        operador.value = "="
    }

}

// FUNÇÕES DE CLIQUE
b1.addEventListener("click", function () { digito(this.value) })
b2.addEventListener("click", function () { digito(this.value) })
b3.addEventListener("click", function () { digito(this.value) })
b4.addEventListener("click", function () { digito(this.value) })
b5.addEventListener("click", function () { digito(this.value) })
b6.addEventListener("click", function () { digito(this.value) })
b7.addEventListener("click", function () { digito(this.value) })
b8.addEventListener("click", function () { digito(this.value) })
b9.addEventListener("click", function () { digito(this.value) })
b0.addEventListener("click", function () { digito(this.value) })
b00.addEventListener("click", function () { digito(this.value) })
// LIMPA O CAMPO DE TEXTO
limpa.addEventListener("click", function () {
    mostrador.value = "0"
    operador.value = ""
    numeroAuxiliar.value = "0"
})
// APAGA CARACTER POR CARACTER
apaga.addEventListener("click", function () {
    if (mostrador.value >= 10) {
        mostrador.value = mostrador.value.slice(0, -1)
    } else {
        mostrador.value = "0"
    }
})
// ADICIONA UM PONTO
ponto.addEventListener("click", function () {
    if (mostrador.value.indexOf(".") === -1) {
        mostrador.value += "."
    }
})

// ADICIONA AS OPERAÇÕES
mais.addEventListener("click", function () { operacao(this.value) })
menos.addEventListener("click", function () { operacao(this.value) })
multi.addEventListener("click", function () { operacao(this.value) })
divi.addEventListener("click", function () { operacao(this.value) })
raiz.addEventListener("click", function () { operacao(this.value) })
quadrado.addEventListener("click", function () { operacao(this.value) })
elevado.addEventListener("click", function () { operacao(this.value) })
porcentagem.addEventListener("click", function () { operacao(this.value) })
pi.addEventListener("click", function () { operacao(this.value) })

igual.addEventListener("click", igualdade)