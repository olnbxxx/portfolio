function bigone () {
    let big1 = parseFloat(document.getElementById("big1").value)
    let big2 = parseFloat(document.getElementById("big2").value)
    if (big1 > big2) {
        document.getElementById("rebig").value = big1;
    }else {
        document.getElementById("rebig").value = big2;
    }
}

document.getElementById("btnbig").addEventListener("click", bigone);
