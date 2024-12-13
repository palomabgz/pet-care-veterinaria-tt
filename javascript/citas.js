window.onload = function () {
    const servicioSeleccionado = localStorage.getItem("servicioSeleccionado");

    if (servicioSeleccionado) {
        document.getElementById("tituloServicio").textContent = `Servicio: ${servicioSeleccionado}`;
    } else {
        alert("No se seleccionó ningún servicio.");
        document.getElementById("tituloServicio").textContent = "";
        window.location.href = "./servicios.html";
    }
    localStorage.clear()
};

function enviarFormulario(event) {
    event.preventDefault(); 

    // Obtiene datos de contacto
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('numero').value.trim();

    if (!nombre || !apellido || !email || !telefono) {
        alert("Por favor, completa todos los campos");
        return;
    }

    // Listado Carrito
    let citaServicio = '';
    citaServicio += `Nombre: ${nombre}\n`;
    citaServicio += `Apellido: ${apellido}\n`;
    citaServicio += `Email: ${email}\n`;
    citaServicio += `Telefono: ${telefono}\n`;

    document.getElementById('formulario').submit();
}

document.getElementById('botonEnviar').addEventListener('click', enviarFormulario);
