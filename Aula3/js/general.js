// FAZ UMA VALIDAÇÃO GERAL DE DATAS
function dateValidation(date) {
    let day, month, year, hour, minute;
    let size = date.length;
    if (date === null) {
        return false;
    }
    if (size === 0 || (size != 10 && size != 16)) {
        return false;
    }

    date = date.replaceAll("-", "/")
    vetorDate = date.split("/");
    if (vetorDate[0].length === 4) {
        year = vetorDate[0]
        month = vetorDate[1];
        day = vetorDate[2];
    } else {
        day = vetorDate[0];
        month = vetorDate[1];
        year = vetorDate[2];
    }

    if (day.length > 2) {
        let vetorDay = day.split("T")
        day = vetorDay[0];
        let vetorHour = vetorDay[1].split(":")
        hour = vetorHour[0]
        minute = vetorHour[1]
    }

    // Validação de mês
    if (month < 1 || month > 12) {
        console.log("Mês inválido")
        return false;
    }

    // Validação de Ano
    if (year < 1900) {
        console.log("Ano inválido")
        return false;
    }

    // meses com 31 dias
    if (month == 1 || month == 3 || month == 5 ||
        month == 7 || month == 8 || month == 10 || month == 12) {
        if (day <= 31) {
            return true;
        } else {
            return false;
        }
        // meses com 30 dias
    } else if (month != 2) {
        if (day <= 30) {
            return true;
        } else {
            return false;
        }
        // fevereiro
    } else {
        if ((year % 400 === 0) || (year % 100 !== 0) && (year % 4 === 0)) {
            // fevereiro com 29 dias
            if (day <= 29) {
                return true;
            } else {
                return false;
            }
        } else {
            // fevereiro com 28 dias
            if (day <= 28) {
                return true;
            } else {
                return false;
            }
        }
    }
}

// VERIFICA SE O CAMPO ESTÁ VAZIO
function emptyFieldValidation(value) {
    return value.length !== 0 ? false : true;
}