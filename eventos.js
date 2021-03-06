'use strict'

window.addEventListener('load', function () {
    console.log("EL COSO ESE");
    var formulario = document.querySelector("#autonomo");
    var box_dashed = document.querySelector(".dashed");
    formulario.addEventListener('submit', function () {
        console.log("Evento submit capturado");

        var usuario = document.querySelector("#usuario").value;
        var nombre = document.querySelector("#nombre").value;
        var telefono = document.querySelector("#telefono").value;
        var cedula = document.querySelector("#cedula").value;

        var fecha = document.querySelector("#fecha").value;

        if (usuario.trim() == null || usuario.trim().length == 0) {
            alert("Error en el campo Usuario");
            return false;
        }
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("Error en el campo Nombre");
            return false;
        }
        if (telefono.trim() == null || telefono.trim().length == 0) {
            alert("Error en el campo Telefono");
            return false;
        }
        if (cedula.trim() == null || cedula.trim().length == 0) {
            alert("Error en el campo Cedula");
            return false;
        }
        if (fecha.trim() == null || fecha.trim().length == 0) {
            alert("Error en el campo Fecha");
            return false;
        }

        var p_usuario = document.querySelector("#p_usuario span");
        var p_nombre = document.querySelector("#p_nombre span");
        var p_telefono = document.querySelector("#p_telefono span");
        var p_cedula = document.querySelector("#p_cedula span");
        var p_fecha = document.querySelector("#p_fecha span");
        console.log(usuario, nombre, telefono, cedula, fecha);

        p_usuario.innerHTML = usuario;
        p_nombre.innerHTML = nombre;
        p_telefono.innerHTML = telefono;
        p_cedula.innerHTML = cedula;
        p_fecha.innerHTML = fecha;
    });

});