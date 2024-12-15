// HEADER
document.getElementById("navbar").innerHTML = `
       <nav class="navbar navbar-expand-lg bg-body-tertiary navbarr">
            <div class="container-fluid navbarr">
                <a class="icono" href="/index.html"></a>
                <button class="navbar-toggler icono-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active link-activo" aria-current="page" href="/index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/servicios.html">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/reservas.html">Consultas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/error404.html">Error</a>
                        </li>
                    </ul>
                    <button id="mode-toggle" class="mode-toggle">Modo Oscuro</button>
                </div>
            </div>
        </nav>

`;


// IMAGENES
document.getElementById("imagenes").innerHTML = `
    <section class="contenedor-imagenes">
        <img src="/img/niños2.jpg" alt="Imágen de dos nenas y un nene recostados en un pelotero del salón de 
        eventos Oli Oli mientrás sonrien.">
        <img src="/img/pelotero3.jpg" alt="Imágen de una sala sumamente colorida con colores: rojo, blanco, 
        azul, naranja, amarillo y verde, con varios juegos del salón de eventos Oli Oli.">
        <img src="/img/pelotero2.jpg" alt="Imágen de una sala sumamente colorida con colores: rojo, blanco, 
        azul, naranja, amarillo y verde, con varios juegos del salón de eventos Oli Oli">
    </section>
`;

