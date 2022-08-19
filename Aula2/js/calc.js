let mostrador = document.getElementById("mostrador")
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
let mais = document.getElementById("mais")
let menos = document.getElementById("menos")
let multi = document.getElementById("multi")
let divi = document.getElementById("divi")
let ponto = document.getElementById("ponto")
let apaga = document.getElementById("apaga")
let limpa = document.getElementById("limpa")

function digito(valor) {
    if (mostrador.value !== "0") {
        mostrador.value = mostrador.value + valor
    } else {
        mostrador.value = valor
    }
}

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

limpa.addEventListener("click", function () {
    mostrador.value = "0"
})
apaga.addEventListener("click", function () {
    if (mostrador.value > 10) {
        mostrador.value = mostrador.value.slice(0, -1)
    } else {
        mostrador.value = "0"
    }
})
ponto.addEventListener("click", function () {
    if (mostrador.value.indexof(".") === -1) {
        mostrador.value += "."
    }
})