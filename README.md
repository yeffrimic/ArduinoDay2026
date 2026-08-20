# Arduino Day 2026 — Guatemala

Landing page del evento (28 de agosto, Universidad Galileo). Sitio estático, sin build ni dependencias.

## Estructura del proyecto

```
arduinoday/
├── index.html            # página principal
├── css/
│   └── styles.css        # todos los estilos
├── js/
│   └── main.js            # datos de ponentes/patrocinadores + interactividad (agenda, modal de ficha)
├── fotos/                 # fotos de ponentes y del keynote
├── patrocinadores/        # logos de patrocinadores (solo se muestran, sin ficha)
└── img/                   # imágenes generales del sitio (og-image, favicon) — pendiente
```

## Ponentes (`fotos/`)

El nombre del archivo debe coincidir con el campo `foto` de cada ponente en `js/main.js`. En cuanto el archivo existe con ese nombre, aparece solo en la tarjeta y en la ficha — no hay que tocar código.

| Archivo | Ponente |
|---|---|
| `fotos/cuartielles.png` | David Cuartielles (keynote) |
| `fotos/damaris.png` | Damaris Flores |
| `fotos/giovanni.png` | Giovanni Salinas |
| `fotos/douglas.png` | Douglas Lopez |
| `fotos/jorge.jpg` | Jorge Guajardo |
| `fotos/victor.jpg` | Victor Vargas |
| `fotos/dennys.jpg` | Dennys Emmanuel Tezén Guerra |
| `fotos/juan.png` | Fernando Medrano |
| `fotos/esdras.jpg` | Esdras Abel Sapón Díaz |
| `fotos/roberto.jpg` | Roberto Catalán |
| `fotos/aramy.jpg` | Aramy Escobar |
| `fotos/bagur.jpg` | José Bagur |
| `fotos/pablo.jpg` | Pablo Roberto González Quelex |
| `fotos/cats.png` | Electronic Cats |

Si un ponente todavía no tiene foto, no pasa nada: mientras el archivo no exista se muestra automáticamente un marcador "Foto · Nombre" en su lugar (no rompe el diseño).

## Patrocinadores (`patrocinadores/`)

Los logos solo se muestran (sin clic ni ficha). Para agregar uno: poné el archivo en `/patrocinadores` y agregá su nombre a la lista `PATROCINADORES` al inicio de `js/main.js`.

## Pendiente

- `img/og-image.jpg` (1200×630px) — vista previa al compartir el link en redes/WhatsApp
- `img/favicon.png` (512×512px o 32×32px mínimo) — ícono de la pestaña del navegador

## Cómo ver el sitio localmente

```bash
cd arduinoday
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Editar contenido (ponentes, agenda, textos)

- **Ponentes, biografías y agenda**: objeto `PONENTES` y array `ORDEN` en `js/main.js`.
- **Patrocinadores**: array `PATROCINADORES` en `js/main.js`.
- **Estilos/colores**: variables en `:root` al inicio de `css/styles.css` (`--azul`, `--teal`, `--verde`, etc.).
- **Textos fijos (hero, footer, keynote, guías)**: directamente en `index.html`.
