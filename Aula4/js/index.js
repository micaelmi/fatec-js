let num1 = document.getElementById("num1")
let op = document.getElementById("op")
let num2 = document.getElementById("num2")
let calc = document.getElementById("calc")
let results = document.getElementById("results")
let result;

calc.addEventListener("click", Calculate)

function fieldsAreValid() {
    if (fieldIsEmpty(num1.value) ||
        fieldIsEmpty(op.value) ||
        fieldIsEmpty(num2.value) ||
        !isANumberValidation(num1.value, num2.value)
    ) {
        return false;
    } else {
        return true;
    }
}

function fieldIsEmpty(field) {
    return field === "" ? true : false;
}

function isANumberValidation(number1, number2) {
    return (isNaN(number1) || isNaN(number2)) ? false : true;
}

function Calculate() {
    if (fieldsAreValid()) {
        if (op.value === "-") {
            result = num1.value - num2.value;
        } else
            if (op.value === "*" || op.value === "x") {
                result = num1.value * num2.value;
            } else
                if (op.value === "/") {
                    result = num1.value / num2.value;
                } else
                    if (op.value === "+") {
                        result = parseFloat(num1.value) + parseFloat(num2.value)
                    } else {
                        result = "Operação inválida"
                    }
        swal("Resultado: " + result)
        results.textContent = "Resultado = " + result;
    } else {
        swal("Algum campo não foi preenchido corretamente")
    }
}