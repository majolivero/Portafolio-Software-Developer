function mostrarHome(){
    document.getElementById("paginaInicio").hidden = false;
    document.getElementById("paginaAbout").hidden = true;
    document.getElementById("paginaSkills").hidden = true;
    document.getElementById("paginaContacto").hidden = true;
}

function mostrarAbout(){
    document.getElementById("paginaInicio").hidden = true;
    document.getElementById("paginaAbout").hidden = false;
    document.getElementById("paginaSkills").hidden = true;
    document.getElementById("paginaContacto").hidden = true;
}

function mostrarSkills(){
    document.getElementById("paginaAbout").hidden = true;
    document.getElementById("paginaSkills").hidden = false;
    document.getElementById("paginaInicio").hidden = true;
    document.getElementById("paginaContacto").hidden = true;
}

function mostrarContacto(){
    document.getElementById("paginaInicio").hidden = true;
    document.getElementById("paginaAbout").hidden = true;
    document.getElementById("paginaSkills").hidden = true;
    document.getElementById("paginaContacto").hidden = false;
}