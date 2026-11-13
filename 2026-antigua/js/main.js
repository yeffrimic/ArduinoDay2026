/* =========================================================
   Arduino Day 2026 · Antigua Guatemala
   Todo el contenido editable de la agenda vive aquí.

   - Para poner la foto de un ponente: guardala en img/ y
     escribí la ruta en "foto" (ej. "img/libni-barrios.jpg").
     Sin foto se muestran sus iniciales.
   - En charlas compartidas, los nombres van al mismo tamaño.
   ========================================================= */

const AGENDA = [
  { hora: "10:00", tipo: "pausa", titulo: "Registro" },
  {
    hora: "10:15", tipo: "keynote",
    titulo: "Bienvenida y keynote inaugural",
    ponentes: [{ nombre: "Yeffri J. Salazar", foto: "img/yeffri-salazar.jpg" }],
    org: "Organizador y líder de Comunidad Arduino Guatemala",
    resumen: "Maker y experto en electrónica, con experiencia en diseño de PCB para CubeSats, robótica, IoT y emprendimiento."
  },
  {
    hora: "10:45",
    titulo: "La Ruta del Chip",
    ponentes: [{ nombre: "Katerine Maldonado", foto: "img/katerine-maldonado.jpg" }],
    org: "Asesora técnica de PRONACOM, Ministerio de Economía",
    resumen: "La iniciativa país impulsada por el Ministerio de Economía para desarrollar en Guatemala la industria de semiconductores y manufactura electrónica."
  },
  {
    hora: "11:15",
    titulo: "Traducción de LENSEGUA con inteligencia artificial",
    ponentes: [{ nombre: "Libni Josué Barrios Pinto", foto: "img/libni.jpg" }],
    resumen: "Una app Android que traduce con IA la Lengua de Señas de Guatemala, con videollamadas entre personas sordas y oyentes y un modo de texto a seña."
  },
  {
    hora: "11:45",
    titulo: "Copiloto en el aula: IA para aprender CircuitPython",
    ponentes: [{ nombre: "Mario Pojoy", foto: "img/mario.jpg" }],
    resumen: "Programa electrónica con CircuitPython en placas como ESP32 y Raspberry Pi Pico, y usa la IA como tutor que te guía paso a paso en lugar de darte la respuesta hecha."
  },
  {
    hora: "12:15",
    titulo: "Automatización de un gallinero",
    ponentes: [{ nombre: "Gerardo Waldemar Montejo Saucedo", foto: "img/gerardo.jpg" }],
    resumen: "Gallinero casero conectado a internet que automatiza la alimentación, hidratación, desinfección y recolección de huevos, con monitoreo remoto y autonomía de hasta 2 días sin intervención humana."
  },
  {
    hora: "12:45",
    titulo: "Arduino UNO vs. ESP32",
    ponentes: [
      { nombre: "Dylan Carlos Yurem Gutiérrez Pacheco", foto: "img/dylan.jpg" },
      { nombre: "Lisandro Mauricio Emanuel Tzunux Tzoc", foto: "img/mauricio.jpg" }
    ],
    resumen: "¿Qué placa elegir? El UNO es ideal para aprender y armar prototipos simples a 5 V; el ESP32, para proyectos que necesitan conexión inalámbrica."
  },
  { hora: "1:15", tipo: "pausa", titulo: "Refacción", nota: "15 minutos" },
  {
    hora: "1:30",
    titulo: "¿Cómo crear una empresa de videojuegos en Guatemala?",
    ponentes: [{ nombre: "Cinthya Sandoval", foto: "img/cinthya.jpg" }],
    org: "Fundadora y CEO de Conexa",
    resumen: "A partir del caso de Bielorrusia y del proyecto Game Fest: cómo Guatemala puede generar PIB impulsando negocios de videojuegos con jóvenes del sector tecnológico."
  },
  {
    hora: "2:00",
    titulo: "Ciberseguridad en redes Wi-Fi abiertas",
    ponentes: [{ nombre: "Kimberly Jazmín Custodio Mencos", foto: "img/kimberly.jpg" }],
    resumen: "Un dispositivo «gemelo malvado» que imita redes Wi-Fi públicas registró 178 conexiones en un campus universitario: así de expuestos quedan tus datos en una red sin verificar."
  },
  {
    hora: "2:30",
    titulo: "Embedito95: TypeScript en microcontroladores",
    ponentes: [
      { nombre: "David Salvador Melara Lemus", foto: "img/david.jpg" },
      { nombre: "José Velásquez", foto: "img/jose.jpg" }
    ],
    resumen: "Un toolchain de código abierto para programar microcontroladores con e95, un lenguaje tipo TypeScript que se transpila a C++. Con demostración en vivo de multitarea en hardware sencillo.",
    enlace: { url: "https://github.com/davidsal/Embedito95", texto: "Repositorio en GitHub" }
  },
  {
    hora: "3:00",
    titulo: "Cómo la curiosidad nos llevó al mundial de robótica",
    ponentes: [
      { nombre: "María Fernanda García de León", foto: "img/mafer.jpg" },
      { nombre: "Leo Sebastian Vidal", foto: "img/leo.jpg" }
    ],
    org: "Proyecto Balam · Team Guatemala, FIRST Global Challenge 2025",
    resumen: "Del Encuentro Nacional de Robótica Proyecto Balam a representar a Guatemala en el FIRST Global Challenge 2025: su historia y cómo encontraron su pasión por la tecnología."
  },
  { hora: "3:30", tipo: "pausa", titulo: "Cierre" }
];

/* ---------- utilidades ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function iniciales(nombre) {
  const p = nombre.trim().split(/\s+/);
  return ((p[0] || "")[0] + ((p[1] || "")[0] || "")).toUpperCase();
}

function avatar(p) {
  if (p.logo) return `<span class="avatar logo"><img src="${esc(p.logo)}" alt="" loading="lazy"></span>`;
  if (p.foto) return `<span class="avatar"><img src="${esc(p.foto)}" alt="" loading="lazy"></span>`;
  return `<span class="avatar ini" aria-hidden="true">${esc(iniciales(p.nombre))}</span>`;
}

function horaAmPm(h) {
  const [hh] = h.split(":").map(Number);
  return hh >= 10 && hh < 12 ? "a. m." : "p. m.";
}

/* ---------- agenda ---------- */
function pintarAgenda() {
  const ol = document.getElementById("agenda-lista");
  if (!ol) return;
  ol.innerHTML = AGENDA.map(a => {
    const hora = `<time class="ag-hora">${esc(a.hora)}<small>${horaAmPm(a.hora)}</small></time>`;
    if (a.tipo === "pausa") {
      return `<li class="ag pausa">${hora}<div class="ag-cuerpo"><span class="ag-tit">${esc(a.titulo)}</span>${a.nota ? `<span class="ag-nota">${esc(a.nota)}</span>` : ""}</div></li>`;
    }
    const duo = a.ponentes.length > 1 ? " duo" : "";
    const quienes = a.ponentes.map(p => `<div class="quien">${avatar(p)}<span class="nombre">${esc(p.nombre)}</span></div>`).join("");
    return `<li class="ag${a.tipo === "keynote" ? " keynote" : ""}${a.pendiente ? " pendiente" : ""}">
      ${hora}
      <article class="ag-cuerpo">
        ${a.tipo === "keynote" ? `<span class="pastilla">Keynote</span>` : ""}
        <h3 class="ag-tit">${esc(a.titulo)}</h3>
        <div class="quienes${duo}">${quienes}</div>
        ${a.org ? `<p class="ag-org">${esc(a.org)}</p>` : ""}
        <p class="ag-res">${esc(a.resumen)}</p>
        ${a.enlace ? `<a class="ag-link" href="${esc(a.enlace.url)}" target="_blank" rel="noopener">${esc(a.enlace.texto)} →</a>` : ""}
      </article>
    </li>`;
  }).join("");
}

/* ---------- cuenta regresiva ---------- */
const INICIO = new Date("2026-11-27T10:00:00-06:00");
const FIN = new Date("2026-11-27T15:30:00-06:00");

function pintarCuenta() {
  const el = document.getElementById("cuenta");
  if (!el) return;
  const ahora = new Date();
  if (ahora >= FIN) {
    el.innerHTML = `<b>¡Gracias por celebrar con nosotros!</b>`;
  } else if (ahora >= INICIO) {
    el.innerHTML = `<b>¡Estamos en vivo!</b> Te esperamos en Porta Hotel Antigua.`;
  } else {
    const ms = INICIO - ahora;
    const d = Math.floor(ms / 864e5);
    const h = Math.floor(ms / 36e5) % 24;
    const m = Math.floor(ms / 6e4) % 60;
    el.innerHTML = `<span><b>${d}</b> días</span><span><b>${h}</b> horas</span><span><b>${m}</b> min</span>`;
  }
  el.hidden = false;
}

pintarAgenda();
pintarCuenta();
setInterval(pintarCuenta, 30000);
