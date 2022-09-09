
function dateValidation(date) {
    let day, month, year, hour, minute, second;
    let size = date.length;
    if (date === null) {
        return false;
    }
    if (size === 0) {
        return false;
    }

    vetorDate = date.split("/");
    day = vetorDate[0];
    month = vetorDate[1];
    year = vetorDate[2];

    // meses com 31 dias
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        if (day <= 31) {
            return true;
        } else {
            return false;
        }
        // meses com 30 dias
    } else if (month !== 2) {
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



    return true;
}