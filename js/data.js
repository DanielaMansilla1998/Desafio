document.addEventListener("DOMContentLoaded", () => {
    let reservas = [];

    // Cargar JSON
    fetch("reservas.json")
        .then(response => response.json())
        .then(data => {
            reservas = data;
            mostrarReservas(reservas);
        })
        .catch(error => console.error("Error al cargar el JSON de reservas:", error));


    function mostrarReservas(listado) {
        const contenedor = document.getElementById("reservas");
        contenedor.innerHTML = "";

        listado.forEach(reserva => {
            const cardReserva = document.createElement("div");
            cardReserva.className = "card-reserva";
            cardReserva.innerHTML = `
                <img src="${reserva.imagen}" alt="${reserva.nombre}">
                <h3>${reserva.salon}</h3>
                <p>${reserva.descripcion}</p>

                <div class="contenedor-datos">
                   <p>Sucursal: ${reserva.sucursal}</p>
                   <p>Salón ${reserva.tipo}</p>
                </div>

                <p class="valor-base">Valor base: $${reserva.valor.toFixed(2)}</p>
            `;
            contenedor.appendChild(cardReserva);
        });
    }


    const selectSucursal = document.getElementById("sucursal");
    const selectTipoSalon = document.getElementById("tipo");
    const selectPrecio = document.getElementById("precio");

    selectSucursal.addEventListener("change", aplicarFiltros);
    selectTipoSalon.addEventListener("change", aplicarFiltros);
    selectPrecio.addEventListener("change", aplicarFiltros);


    function aplicarFiltros() {
        let reservasFiltradas = [...reservas];

        const sucursal = selectSucursal.value;
        if (sucursal !== "todas") {
            reservasFiltradas = reservasFiltradas.filter(
                reserva => reserva.sucursal === sucursal
            );
        }

        const tipoSalon = selectTipoSalon.value;
        if (tipoSalon !== "todas") {
            reservasFiltradas = reservasFiltradas.filter(
                reserva => reserva.tipo === tipoSalon
            );
        }

        const precio = selectPrecio.value;
        if (precio === "asc") {
            reservasFiltradas.sort((a, b) => a.valor - b.valor);
        } else if (precio === "desc") {
            reservasFiltradas.sort((a, b) => b.valor - a.valor);
        }

        mostrarReservas(reservasFiltradas);
    }

});