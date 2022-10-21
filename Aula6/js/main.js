const page = document.querySelector('html')
const darkMode = document.getElementById('activate-dark');

darkMode.addEventListener('change', function () {
    page.classList.toggle('dark-mode')
})

function readStorage(key) {
    if (window.localStorage) {
        return JSON.parse(localStorage.getItem(key))
    } else {
        alert("Local Storage não suportado")
    }
}

function recordStorage(key, value) {
    if (window.localStorage) {
        localStorage.setItem(key, JSON.stringify(value))
    } else {
        alert("Local Storage não suportado")
    }
}