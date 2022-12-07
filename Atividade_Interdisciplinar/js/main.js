
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


let content = ``

const CSVToArray = (data, delimiter = ';', omitFirstRow = true) =>
    data
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(v => v.split(delimiter));


window.onload = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            // alert(res); //  A Variável res terá o conteúdo.
            content = res
            // console.log(content)
            let file = CSVToArray(content, ';', true)
            recordStorage("covidData", file)
            // console.log(JSON.stringify(file))
            createChart()
        }
    }
    xhttp.open("GET", "dados.csv", true);
    xhttp.send();
}
