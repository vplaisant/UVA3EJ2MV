document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita el envío real

            // Obtener valores
            const nombre = document.getElementById("nombre_apellido").value.trim();
            const email = document.getElementById("mail").value.trim();
            const asunto = document.getElementById("mail_asunto").value.trim();
            const consulta = document.getElementById("consulta").value.trim();

            // Validar campos
            let errores = [];

            if (!nombre) errores.push("Debe ingresar su nombre y apellido.");
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errores.push("Debe ingresar un email válido.");
            }
            if (!asunto) errores.push("Debe ingresar un asunto.");
            if (!consulta) errores.push("Debe ingresar una consulta.");

            if (errores.length > 0) {
                alert("Por favor corrija los siguientes errores:\n\n" + errores.join("\n"));
            } else {
                alert(`¡Gracias por su contacto, ${nombre}!\nEn breve le estaré respondiendo.`);
                form.reset(); // Limpiar el formulario si todo está bien
            }
        });
    });