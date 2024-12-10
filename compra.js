// SessionStorage
const productos = JSON.parse(localStorage.getItem('productos')) || [];
const total = localStorage.getItem('total') || 0;

const resumen = document.getElementById("carrito");
let resumenTexto = "Resumen de la compra:<br><br>";

// Bucle productos
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    resumenTexto += `${producto.nombre}: $${producto.precio}<br>`;
}

resumenTexto += `<br>Total a pagar: $${total}`;
resumen.innerHTML = resumenTexto;


// Envío form
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

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
    let carritoContenido = '';
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        carritoContenido += `${producto.nombre} - $${producto.precio}\n`;
    }

    const totalConPesos = `$${total}`;

    document.getElementById('carritoData').value = carritoContenido;
    document.getElementById('totalCarrito').value = totalConPesos;
    document.getElementById('formulario').submit();
}

    document.getElementById('botonEnviar').addEventListener('click', enviarFormulario);