# Arduino Day 2026 — Guatemala

Landing page oficial de Arduino Day Guatemala 2026 — 28 de agosto, Universidad Galileo. Sitio estático de una sola página, sin build ni dependencias: HTML, CSS y JavaScript puro.

## Contenido

- Cuenta regresiva de datos clave del evento (fecha, horario, sede, parqueo)
- Keynote de apertura
- Tarjetas de ponentes y talleristas, con ficha modal por cada uno
- Agenda del día por horario y sala (vista adaptada a móvil y a escritorio)
- Sección de patrocinadores
- Guía rápida de "por dónde empezar" según el perfil del asistente

## Estructura del proyecto

```
arduinoday/
├── index.html          # página principal
├── css/
│   └── styles.css      # estilos (mobile-first)
├── js/
│   └── main.js          # datos de ponentes/patrocinadores + interactividad
├── fotos/               # fotos de ponentes y del keynote
├── patrocinadores/      # logos de patrocinadores
└── img/                 # favicon y og-image
```

## Editar contenido

Todo el contenido dinámico vive en un solo lugar: `js/main.js`.

- **Ponentes, biografías y agenda**: objeto `PONENTES` y array `ORDEN`.
- **Patrocinadores**: array `PATROCINADORES`.
- **Estilos/colores**: variables en `:root` al inicio de `css/styles.css` (`--azul`, `--teal`, `--verde`, etc.).
- **Textos fijos** (hero, footer, keynote, guías): directamente en `index.html`.

Agregar una foto de ponente o un logo de patrocinador es tan simple como poner el archivo en la carpeta correspondiente (`fotos/` o `patrocinadores/`) con el nombre que ya está referenciado en `js/main.js`.

## Ver el sitio localmente

```bash
git clone https://github.com/yeffrimic/ArduinoDay2026.git
cd ArduinoDay2026
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Despliegue (GitHub Pages)

El sitio no necesita build: **Settings → Pages → Deploy from a branch → `main` / `root`**. Cada push a `main` se refleja directo en producción.

## Comunidad Arduino Guatemala

Fundada en 2012 por Oscar Leche · Liderada por Yeffri Salazar
[fb.com/arduinoguatemala](https://fb.com/arduinoguatemala)
