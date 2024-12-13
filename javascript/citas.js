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