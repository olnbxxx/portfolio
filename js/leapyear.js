function leapyear() {
    let year = parseFloat(document.getElementById("year").value);
    console.log(year);
    let result = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
        if (year % 400 == 0) {
    result = true;
        }
    } else {
        result = true;
    }
    }
    if (result) {
    document.getElementById("leapyear").value = "Es bisiesto";
    } else {
    document.getElementById("leapyear").value = "No es bisiesto";
    }
    }

    document.getElementById("btn").addEventListener("click", leapyear);