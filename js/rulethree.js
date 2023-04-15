//regla de tres
function tabla3 () {
    let numero1 = parseFloat(document.getElementById("input1").value)
    let numero2 = parseFloat(document.getElementById("input2").value)
    let numero3 = parseFloat(document.getElementById("input3").value)
    let resultado = numero3 * numero2 / numero1
    document.getElementById("resultado").value = resultado
}

document.getElementById("button_result").addEventListener("click", tabla3);