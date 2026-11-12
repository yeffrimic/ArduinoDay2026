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

## Ver el sitio localmente

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Despliegue (GitHub Pages)

**Settings → Pages → Deploy from a branch → `main` / `root`**. Cada push a `main` se publica directo.
