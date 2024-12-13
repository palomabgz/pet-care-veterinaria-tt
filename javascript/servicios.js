function elegirServicio(servicio) {
    localStorage.setItem("servicioSeleccionado", servicio); // Guardar el servicio en localStorage
    window.location.href = "./citas.html"; // Redirigir a la página de citas
}
