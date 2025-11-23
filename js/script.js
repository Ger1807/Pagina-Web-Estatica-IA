// Script principal que carga todos los componentes modulares

// Función para cargar el header
function cargarHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#banner">IA Futura</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#introduccion">Introducción</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#caracteristicas">Características</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#ejemplos">Ejemplos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

// Función para cargar el banner principal
function cargarBanner() {
    const banner = document.getElementById('banner');
    banner.innerHTML = `
        <div class="container">
            <div class="banner-content">
                <h1>Inteligencia Artificial: El Futuro es Ahora</h1>
                <p>Descubre cómo la IA está transformando industrias, mejorando nuestras vidas y creando nuevas oportunidades en el mundo digital.</p>
                <a href="#introduccion" class="btn btn-primary btn-lg">Explorar Más</a>
            </div>
        </div>
    `;
}

// Función para cargar la sección de introducción
function cargarIntroduccion() {
    const introduccion = document.getElementById('introduccion');
    introduccion.innerHTML = `
        <div class="container">
            <h2>¿Qué es la Inteligencia Artificial?</h2>
            <div class="intro-content">
                <div class="intro-text">
                    <p>La Inteligencia Artificial (IA) se refiere a sistemas o máquinas que imitan la inteligencia humana para realizar tareas y pueden mejorar iterativamente a partir de la información que recopilan.</p>
                    <p>Desde asistentes virtuales hasta diagnósticos médicos avanzados, la IA está revolucionando la forma en que interactuamos con la tecnología y resolvemos problemas complejos.</p>
                    <p>La combinación de grandes volúmenes de datos, algoritmos avanzados y potencia de computación ha permitido avances significativos en esta área en los últimos años.</p>
                </div>
                <div class="intro-image">
                    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Representación de Inteligencia Artificial">
                </div>
            </div>
            <div class="datos-impactantes">
                <div class="dato">
                    <h3>37%</h3>
                    <p>de empresas han implementado IA en 2023</p>
                </div>
                <div class="dato">
                    <h3>$15.7T</h3>
                    <p>contribución proyectada de IA a la economía global para 2030</p>
                </div>
                <div class="dato">
                    <h3>85%</h3>
                    <p>de interacciones con servicio al cliente serán manejadas por IA</p>
                </div>
            </div>
        </div>
    `;
}

// Función para cargar la sección de características
function cargarCaracteristicas() {
    const caracteristicas = document.getElementById('caracteristicas');
    caracteristicas.innerHTML = `
        <div class="container">
            <h2>Características Principales de la IA</h2>
            <div class="row">
                <div class="col-md-4 caracteristica">
                    <div class="caracteristica-icono">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3>Aprendizaje Automático</h3>
                    <p>Los sistemas de IA pueden aprender y mejorar automáticamente a partir de la experiencia sin ser programados explícitamente.</p>
                </div>
                <div class="col-md-4 caracteristica">
                    <div class="caracteristica-icono">
                        <i class="fas fa-language"></i>
                    </div>
                    <h3>Procesamiento de Lenguaje Natural</h3>
                    <p>Capacidad de entender, interpretar y generar lenguaje humano, permitiendo una comunicación más natural con las máquinas.</p>
                </div>
                <div class="col-md-4 caracteristica">
                    <div class="caracteristica-icono">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3>Visión por Computadora</h3>
                    <p>Habilidad para interpretar y comprender el mundo visual, identificando objetos, personas y acciones en imágenes y videos.</p>
                </div>
                <div class="col-md-4 caracteristica">
                    <div class="caracteristica-icono">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3>Robótica Autónoma</h3>
                    <p>Desarrollo de robots capaces de realizar tareas complejas de forma autónoma, adaptándose a entornos cambiantes.</p>
                </div>
                <div class="col-md-4 caracteristica">
                    <div class="caracteristica-icono">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Análisis Predictivo</h3>
                    <p>Uso de datos históricos y algoritmos para predecir resultados futuros, facilitando la toma de decisiones informadas.</p>
                </div>
                <div class="col-md-4 caracteristica">
                    <div class="caracteristica-icono">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3>Automatización Inteligente</h3>
                    <p>Combinación de IA con automatización para realizar tareas repetitivas de manera más eficiente y con menor intervención humana.</p>
                </div>
            </div>
        </div>
    `;
}

// Función para cargar la sección de ejemplos reales (con imágenes corregidas)
function cargarEjemplos() {
    const ejemplos = document.getElementById('ejemplos');
    ejemplos.innerHTML = `
        <div class="container">
            <h2>Ejemplos Reales de IA en Acción</h2>
            <div class="ejemplos-container">
                <div class="ejemplo">
                    <div class="ejemplo-imagen">
                        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Asistentes Virtuales">
                    </div>
                    <div class="ejemplo-contenido">
                        <h3>Asistentes Virtuales</h3>
                        <p>Siri, Alexa y Google Assistant utilizan IA para comprender y responder a comandos de voz.</p>
                    </div>
                </div>
                <div class="ejemplo">
                    <div class="ejemplo-imagen">
                        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Recomendaciones Personalizadas">
                    </div>
                    <div class="ejemplo-contenido">
                        <h3>Recomendaciones Personalizadas</h3>
                        <p>Netflix, Amazon y Spotify usan IA para sugerir contenido basado en tus preferencias.</p>
                    </div>
                </div>
                <div class="ejemplo">
                    <div class="ejemplo-imagen">
                        <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Diagnóstico Médico">
                    </div>
                    <div class="ejemplo-contenido">
                        <h3>Diagnóstico Médico</h3>
                        <p>IA ayuda a detectar enfermedades como el cáncer analizando imágenes médicas con mayor precisión y rapidez.</p>
                    </div>
                </div>
                <div class="ejemplo">
                    <div class="ejemplo-imagen">
                        <img src="https://media.es.wired.com/photos/645d3377e1c13787dd8e30cd/16:9/w_2560%2Cc_limit/Driverless-Cars-Data-Diet-Business-1247366812.jpg" alt="Vehículos Autónomos">
                    </div>
                    <div class="ejemplo-contenido">
                        <h3>Vehículos Autónomos</h3>
                        <p>Tesla y otras compañías desarrollan coches que se conducen solos usando IA para navegar y tomar decisiones en tiempo real.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para cargar el formulario de contacto
function cargarContacto() {
    const contacto = document.getElementById('contacto');
    contacto.innerHTML = `
        <div class="container">
            <h2>Contáctanos</h2>
            <form id="formulario-contacto">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="interes" class="form-label">Interés Temático</label>
                    <select class="form-control" id="interes" required>
                        <option value="">Selecciona tu interés</option>
                        <option value="aprendizaje-automatico">Aprendizaje Automático</option>
                        <option value="procesamiento-lenguaje">Procesamiento de Lenguaje Natural</option>
                        <option value="vision-computadora">Visión por Computadora</option>
                        <option value="robotica">Robótica</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="mensaje" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="mensaje" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
            </form>
        </div>
    `;
    
    // Agregar funcionalidad al formulario
    document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        this.reset();
    });
}

// Función para cargar el footer (sin información de contacto y con imágenes de desarrolladores)
function cargarFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Desarrolladores</h3>
                    <p>Este sitio fue desarrollado por:</p>
                    <div class="desarrolladores">
                        <div class="desarrollador">
                            <img src="img/germo.jpg" alt="Germo" class="desarrollador-img">
                            <p>Germo</p>
                            <div class="redes-sociales">
                                <a href="https://instagram.com/germo.antonio" class="red-social" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div class="desarrollador">
                            <img src="img/kendri.jpg" alt="Kendri" class="desarrollador-img">
                            <p>Kendri</p>
                            <div class="redes-sociales">
                                <a href="https://instagram.com/ishigodaifuku" class="red-social" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div class="desarrollador">
                            <img src="img/juan.jpg" alt="Juan" class="desarrollador-img">
                            <p>Juan</p>
                            <div class="redes-sociales">
                                <a href="https://instagram.com/juand.3011" class="red-social" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 IA Futura. Todos los derechos reservados.</p>
            </div>
        </div>
    `;
}

// Función para inicializar FontAwesome (necesaria para los iconos)
function inicializarFontAwesome() {
    const fontAwesomeScript = document.createElement('script');
    fontAwesomeScript.src = 'https://kit.fontawesome.com/a076d05399.js';
    fontAwesomeScript.crossOrigin = 'anonymous';
    document.head.appendChild(fontAwesomeScript);
}

// Función principal que se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar todos los componentes
    cargarHeader();
    cargarBanner();
    cargarIntroduccion();
    cargarCaracteristicas();
    cargarEjemplos();
    cargarContacto();
    cargarFooter();
    
    // Inicializar FontAwesome para los iconos
    inicializarFontAwesome();
    
    // Agregar funcionalidad para hacer suave el desplazamiento a los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});