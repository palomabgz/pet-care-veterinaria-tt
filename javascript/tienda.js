let productos = [];
let total = 0;

// Restaurar carrito al cargar la página
window.onload = function () {
    const productosGuardados = localStorage.getItem("productos");
    const totalGuardado = localStorage.getItem("total");

    if (productosGuardados && totalGuardado) {
        productos = JSON.parse(productosGuardados);
        total = parseFloat(totalGuardado);

        // Renderizar productos en el carrito
        const carrito = document.getElementById("carritoData");
        carrito.innerHTML = "";  // Limpiar el carrito antes de agregar los productos

        productos.forEach(producto => {
            let productoItem = document.createElement("p");
            productoItem.id = `producto-${producto.nombre}`; // ID único para cada producto
            productoItem.textContent = `${producto.nombre}: ${producto.cantidad} x $${producto.precio} = $${producto.precio * producto.cantidad}`;
            carrito.appendChild(productoItem);
        });

        // Actualizar el botón de pagar con el total
        document.getElementById("btnPagar").textContent = `Total: $${total}`;
    }
};

function agregarProducto(producto, precio) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = productos.find(p => p.nombre === producto);

    if (productoExistente) {
        // Incrementar cantidad si el producto ya existe
        productoExistente.cantidad++;
        total += precio;

        // Actualizar la vista del producto
        const productoItem = document.getElementById(`producto-${producto}`);
        productoItem.textContent = `${producto}: ${productoExistente.cantidad} x $${productoExistente.precio} = $${productoExistente.precio * productoExistente.cantidad}`;
    } else {
        // Agregar un nuevo producto si no existe
        const nuevoProducto = { nombre: producto, precio: precio, cantidad: 1 };
        productos.push(nuevoProducto);
        total += precio;

        // Agregar a la vista
        const carrito = document.getElementById("carritoData");
        let productoItem = document.createElement("p");
        productoItem.id = `producto-${producto}`; // ID único para actualizar luego
        productoItem.textContent = `${producto}: 1 x $${precio} = $${precio}`;
        carrito.appendChild(productoItem);
    }

    document.getElementById("btnPagar").textContent = `Total: $${total}`;
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("total", total);
}

function pagar() {
    alert("Total a pagar: $" + total);
    window.location.href = "./cart.html";
}

function limpiar() {
    if (confirm("¿Desea limpiar el carrito?")) {
        productos = [];
        total = 0;
        document.getElementById("carritoData").innerHTML = "";
        document.getElementById("btnPagar").textContent = "Comprar";

        localStorage.removeItem("productos");
        localStorage.removeItem("total");
    }
}

function eliminarUnidad(nombreProducto) {
    const productoEliminado = productos.find(p => p.nombre === nombreProducto);

    if (productoEliminado) {
        if (productoEliminado.cantidad > 1) {
            productoEliminado.cantidad--;
            total -= productoEliminado.precio;
        } else {
            productos = productos.filter(p => p.nombre !== nombreProducto); 
            total -= productoEliminado.precio;
        }

        // Actualizar vista
        const productoItem = document.getElementById(`producto-${nombreProducto}`);
        if (productoEliminado.cantidad > 0) {
            productoItem.textContent = `${nombreProducto}: ${productoEliminado.cantidad} x $${productoEliminado.precio} = $${productoEliminado.precio * productoEliminado.cantidad}`;
        } else {
            productoItem.remove();
        }

        document.getElementById("btnPagar").textContent = `Total: $${total}`;

        localStorage.setItem("productos", JSON.stringify(productos));
        localStorage.setItem("total", total);
    }
}