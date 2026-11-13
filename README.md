# Arduino Day Guatemala

Sitios de todas las ediciones de Arduino Day que organiza Comunidad Arduino Guatemala. Sitio estático para GitHub Pages, sin build ni dependencias: HTML, CSS y JavaScript puro.

## Estructura

```
/
├── index.html          # portada general: próxima edición + lista de todas las ediciones
├── assets/             # imágenes de la portada (franja AD21, infinito, logo de la comunidad)
├── 2026-capital/       # Arduino Day 2026 · Ciudad de Guatemala (28 ago, Universidad Galileo)
└── 2026-antigua/       # Arduino Day 2026 · Antigua Guatemala (27 nov, Porta Hotel Antigua)
```

Cada carpeta de edición es independiente: tiene su propio `index.html`, estilos, scripts e imágenes, y solo usa rutas relativas. Las URLs quedan así:

- `/` → portada Arduino Day Guatemala
- `/2026-capital/` → edición capital 2026
- `/2026-antigua/` → edición Antigua 2026

## Agregar una edición nueva

1. Crea una carpeta con el formato `AAAA-ciudad/` (por ejemplo `2027-xela/`) con su propio `index.html`. Puedes copiar `2026-antigua/` como base.
2. En el `index.html` de la raíz:
   - Agrega un `<li class="edicion">` en la lista de ediciones (la más reciente arriba). El atributo `data-fin` es la fecha y hora de cierre; con eso la etiqueta cambia sola de "Próximo" a "Realizado".
   - Actualiza la sección "Próxima edición" y la fecha `INICIO` de la cuenta regresiva.
3. Agrega en el footer de la nueva edición un enlace `../` de regreso a la portada.

## Editar la edición de Antigua 2026

- **Agenda, ponentes y fotos:** el array `AGENDA` en `2026-antigua/js/main.js`. Para poner la foto de un ponente, guárdala en `2026-antigua/img/` y escribe la ruta en `foto`; sin foto se muestran sus iniciales.
- **Colores y tipografías:** variables en `:root` de `2026-antigua/css/estilos.css` (paleta del kit AD21).

## Contenido oficial de Antigua 2026 (actualizado 13 nov 2026)

Esta es la fuente de verdad: coincide con el kit digital (artes de ponentes y agenda oficial). Si el sitio no coincide con esta sección, el sitio está mal.

**Evento:** viernes 27 de noviembre de 2026 · Porta Hotel Antigua · 10:00 a. m. a 3:30 p. m. · entrada gratuita, cupo limitado.

**Enlaces:**
- Registro: https://bit.ly/ArduinoDayAntigua2026
- Sitio oficial (corto): https://bit.ly/4sWkT10 → `/2026-antigua/`
- CFP: https://bit.ly/CFPArduinoDayAntigua2026 (cerrado, cupos llenos)

**Créditos (en este orden):** Organizan Comunidad Arduino Guatemala y yeffrimic · Coorganizan Xibalba Hackerspace y Conexa · Con el apoyo de MINECO, PRONACOM y ProGuatemala.

| Hora | Charla | Ponentes | Resumen |
|---|---|---|---|
| 10:00 | Registro | | |
| 10:15 | Bienvenida y keynote inaugural | Yeffri J. Salazar · Organizador y líder de Comunidad Arduino Guatemala | Maker y experto en electrónica, con experiencia en diseño de PCB para CubeSats, robótica, IoT y emprendimiento. |
| 10:45 | La Ruta del Chip | Katerine Maldonado · Asesora técnica de PRONACOM, Ministerio de Economía | La iniciativa país impulsada por el Ministerio de Economía para desarrollar en Guatemala la industria de semiconductores y manufactura electrónica. |
| 11:15 | Traducción de LENSEGUA con inteligencia artificial | Libni Josué Barrios Pinto | Una app Android que traduce con IA la Lengua de Señas de Guatemala, con videollamadas entre personas sordas y oyentes y un modo de texto a seña. |
| 11:45 | Copiloto en el aula: IA para aprender CircuitPython | Mario Pojoy | Programa electrónica con CircuitPython en placas como ESP32 y Raspberry Pi Pico, y usa la IA como tutor que te guía paso a paso en lugar de darte la respuesta hecha. |
| 12:15 | Automatización de un gallinero | Gerardo Waldemar Montejo Saucedo | Gallinero casero conectado a internet que automatiza la alimentación, hidratación, desinfección y recolección de huevos, con monitoreo remoto y autonomía de hasta 2 días sin intervención humana. |
| 12:45 | Arduino UNO vs. ESP32 | Dylan Gutiérrez y Mauricio Tzunux | ¿Qué placa elegir? El UNO es ideal para aprender y armar prototipos simples a 5 V; el ESP32, para proyectos que necesitan conexión inalámbrica. |
| 1:15 | Refacción (15 minutos) | | |
| 1:30 | Cómo crear una empresa de videojuegos en Guatemala | Cinthya Sandoval · Fundadora y CEO de Conexa | A partir del caso de Bielorrusia y del proyecto Game Fest: cómo Guatemala puede generar PIB impulsando negocios de videojuegos con jóvenes del sector tecnológico. |
| 2:00 | Ciberseguridad en redes Wi-Fi abiertas | Kimberly Jazmín Custodio Mencos | Un dispositivo «gemelo malvado» que imita redes Wi-Fi públicas registró 178 conexiones en un campus universitario: así de expuestos quedan tus datos en una red sin verificar. |
| 2:30 | Embedito95: TypeScript en microcontroladores | David Melara y José Velásquez | Un toolchain de código abierto para programar microcontroladores con e95, un lenguaje tipo TypeScript que se transpila a C++. Con demostración en vivo de multitarea en hardware sencillo. |
| 3:00 | Cómo la curiosidad nos llevó al mundial de robótica | María Fernanda García de León y Leo Vidal · Proyecto Balam · Team Guatemala, FIRST Global Challenge 2025 | Del Encuentro Nacional de Robótica Proyecto Balam a representar a Guatemala en el FIRST Global Challenge 2025: su historia y cómo encontraron su pasión por la tecnología. |
| 3:30 | Cierre | | |

En el sitio se pueden dejar los nombres completos de los ponentes (por ejemplo «Dylan Carlos Yurem Gutiérrez Pacheco»); los artes usan la versión corta.

Estado al 13 nov 2026: el array `AGENDA` de `2026-antigua/js/main.js` coincide con esta tabla y los 13 ponentes tienen foto.

## Ver el sitio localmente

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Despliegue (GitHub Pages)

**Settings → Pages → Deploy from a branch → `main` / `root`**. Cada push a `main` se publica directo.
