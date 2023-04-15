class room {
    constructor (id, name) {
        this.id = id
        this.name = name
    }
}

function getrooms () {
    const javascript = new room (1, "javascript");
    const css = new room (2, "css");
    const html = new room (3, "html");
    let cursos = [javascript, css, html];
    return cursos;
}

//esto es para crear en un select las opciones dinamicamente...

function setselec () {
    const rooms = getrooms()
    let myselect = document.getElementById("roomSelect");
    rooms.forEach(room => {
        let option = document.createElement("option");
        option.value = room.id;
        option.text = room.name;
        myselect.add(option);
    })
}

function addstudent () {
    let studentname = document.getElementById("name").value;
    let studentsurname = document.getElementById("surnames").value;
    let studentcours = document.getElementById("roomSelect");
    let value = studentcours.value;
    let text = studentcours.options[studentcours.selectedIndex].text;

const para = document.createElement("p");
para.innerHTML = "Nombre: " + studentname + "<br>" + "Apellido: " + studentsurname + "<br>" + "Lenguaje: " + text;
const element = document.getElementById("student");
element.appendChild(para);
}

