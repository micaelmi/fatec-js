let button = document.getElementById('button');
let avatar = document.getElementById('avatar');
button.addEventListener('click', verify);

function verify() {
    let myDate = document.getElementById('date')
    if (dateValidation(myDate.value)) {
        Swal.fire("Esta data é válida")
        avatar.src = `https://avatars.dicebear.com/api/bottts/${myDate.value}.svg`
    } else {
        Swal.fire("Esta data não é válida")
    }
}