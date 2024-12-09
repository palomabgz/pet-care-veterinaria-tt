// CARRITO
let productos = [];
let total = 0;

function agregarProducto(producto, precio) {
    let carrito = document.getElementById("carrito");
    let productoItem = document.createElement("p");
    productoItem.textContent = producto;
    carrito.appendChild(productoItem);

    productos.push({ nombre: producto, precio: precio });
    
    total += precio;
    document.getElementById("btnPagar").textContent = `Total: $${total}`;
}

function pagar () {
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("total", total);

    alert("Total a pagar: $" + total);
    window.location.href = "./cart.html";
}

function limpiar () {
    if (confirm("¿Desea limpiar el carrito?")) {
        productos = [];
        total = 0;
        document.getElementById("carrito").innerHTML = "";
        document.getElementById("btnPagar").textContent = "Comprar";

        localStorage.removeItem("productos");
        localStorage.removeItem("total");
    }
}