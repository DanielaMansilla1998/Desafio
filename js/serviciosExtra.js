document.addEventListener("DOMContentLoaded", () => {
    let servicios = [];

    // Cargar JSON
    fetch("servicios.json")
        .then(response => response.json())
        .then(data => {
            servicios = data;
            mostrarServicios(servicios);
        })
        .catch(error => console.error("Error al cargar el JSON de servicios:", error));


    function mostrarServicios(listado) {
        const contenedor = document.getElementById("servicios-extra");
        contenedor.innerHTML = "";

        listado.forEach(servicio => {
            const card = document.createElement("div");
            card.className = "card-servicio";
            card.innerHTML = `
                <img src="${servicio.icono}" alt="${servicio.tipo}">
                <h3>${servicio.tipo}</h3>
                <p class="valor-base">Valor: $${servicio.valor.toFixed(2)}</p>
            `;
            contenedor.appendChild(card);
        });
    }


    const selectPrecio = document.getElementById("valor");

    selectPrecio.addEventListener("change", aplicarFiltros);


    function aplicarFiltros() {
        let serviciosFiltrados = [...servicios];

        const precio = selectPrecio.value;
        if (precio === "asc") {
            serviciosFiltrados.sort((a, b) => a.valor - b.valor);
        } else if (precio === "desc") {
            serviciosFiltrados.sort((a, b) => b.valor - a.valor);
        }

        mostrarServicios(serviciosFiltrados);
    }


});