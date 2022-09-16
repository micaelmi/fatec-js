let button = document.getElementById('button');
let avatar = document.getElementById('avatar');
let error = document.getElementById('error');
let error2 = document.getElementById('error2');
let error3 = document.getElementById('error3');
let myDate = document.getElementById('date');
let myDate2 = document.getElementById('date2');
let myName = document.getElementById('name');
let allValid = true;
let errorMessage = "Data incorreta"

button.addEventListener('click', verify);
myDate.addEventListener('blur', function () {
    verifyDate(myDate.value, error, errorMessage)
});
myDate2.addEventListener('blur', function () {
    verifyDate(myDate2.value, error2, errorMessage)
});
myName.addEventListener('blur', function () {
    verifyEmptyField(myName.value, error3);
})

function verifyDate(value, errorField, message) {
    if (!dateValidation(value)) {
        errorField.textContent = message;
    } else {
        errorField.textContent = "";
    }
}

function verifyEmptyField(value, errorField) {

    if (emptyFieldValidation(value)) {
        errorField.textContent = "Preencha esse campo"
    } else {
        errorField.textContent = ""
    }
}

function verify() {
    verifyDate(myDate.value, error, errorMessage);
    verifyDate(myDate2.value, error2, errorMessage);
    verifyEmptyField(myName.value, error3);

    if (error.textContent == "" && error2.textContent == "" && error3.textContent == "") {
        avatar.src = `https://avatars.dicebear.com/api/bottts/${myDate.value}${myDate2.value}${myName.value}.svg`;
    }
}