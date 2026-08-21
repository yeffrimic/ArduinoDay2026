/* ============================================================
   DATOS — una sola fuente para las tarjetas y para la ficha.
   Para agregar la foto: poné el archivo en /fotos con el nombre
   que ya está en "foto" (ej. "fotos/damaris.jpg") y aparece sola.
   ============================================================ */
const PONENTES = {
  cuartielles:{
    nombre:"David Cuartielles", org:"Co-fundador de Arduino",
    charla:"Keynote de apertura", nivel:"keynote", foto:"fotos/cuartielles.png",
    desc:"Ingeniero de sistemas embebidos y co-fundador de Arduino, la plataforma de hardware y software libre más popular del mundo. Con más de dos décadas democratizando el acceso a la tecnología, su trabajo ha transformado el IoT, la educación STEM y la fabricación digital a nivel global."
  },
  damaris:{
    nombre:"Damaris Flores", org:"Creabot",
    charla:"Taller: Introducción a Arduino", nivel:"taller", foto:"fotos/damaris.png",
    desc:"Taller práctico de tres horas para quienes empiezan desde cero. Primeros circuitos, programación básica y tus primeros proyectos funcionando antes del almuerzo. No se necesitan conocimientos previos."
  },
  giovanni:{
    nombre:"Giovanni Salinas", org:"Supplyframe – Siemens",
    charla:"Taller: EchoGlow — Edge AI para productos", nivel:"taller", foto:"fotos/giovanni.png",
    desc:"Taller práctico de tres horas sobre cómo llevar inteligencia artificial al borde (edge) dentro de productos reales, desde el prototipo hasta la implementación."
  },
  douglas:{
    nombre:"Douglas Lopez", org:"",
    charla:"Micro Modelos de IA en un ESP32", nivel:"Intermedio", foto:"fotos/douglas.png",
    desc:"En esta charla se presentará cómo correr un micromodelo LLM en un dispositivo de recursos limitados como un ESP32."
  },
  jorge:{
    nombre:"Jorge Guajardo", org:"",
    charla:"Talk to Me, ESP32! ESP-NOW ha entrado al Chat!", nivel:"Intermedio", foto:"fotos/jorge.jpg",
    desc:"Introducción a ESP-NOW, la tecnología que permite que varios ESP32 se comuniquen directamente entre sí sin router y sin Internet. Veremos cómo funciona, sus principales características, ventajas y limitaciones, además de ejemplos de comunicación entre dispositivos. Para cerrar, una demo de cómo ESP-NOW sirve para crear soluciones distribuidas, rápidas y autónomas."
  },
  victor:{
    nombre:"Victor Vargas", org:"Universidad del Istmo",
    charla:"Lumen Magna: primera supercomputadora de Guatemala", nivel:"Intermedio", foto:"fotos/victor.jpg",
    desc:"LUMEN MAGNA es un clúster de supercomputación desarrollado por la Universidad del Istmo para fortalecer la investigación, la inteligencia artificial y la formación de estudiantes. Su diseño modular busca demostrar que en Guatemala podemos desarrollar tecnología avanzada y formar talento capaz de competir internacionalmente."
  },
  dennys:{
    nombre:"Dennys Emmanuel Tezén Guerra", org:"",
    charla:"Cuando los sensores conocen los qubits: Arduino, AWS y computación cuántica", nivel:"Intermedio", foto:"fotos/dennys.jpg",
    desc:"Cómo los datos recolectados por sensores viajan desde un dispositivo Arduino hacia AWS para transformarse en un problema de optimización y ser abordados con el algoritmo QAOA usando Amazon Braket. Una demostración práctica que conecta IoT, computación en la nube y computación cuántica partiendo de datos del mundo real. No hace falta saber de cuántica ni de AWS."
  },
  juan:{
    nombre:"Fernando Medrano", org:"",
    charla:"Diseñando tu primer chip con herramientas libres", nivel:"Principiante", foto:"fotos/juan.png",
    desc:"Diseñar y manufacturar semiconductores solía requerir varias decenas de ingenieros y millones de dólares. Hoy es posible diseñar, verificar y manufacturar tu propio chip desde tu casa, en cuestión de horas y con unos 500 dólares. Un vistazo a estas herramientas, a diseños fabricados alrededor del mundo (incluido uno guatemalteco) y una invitación a crear el tuyo."
  },
  esdras:{
    nombre:"Esdras Abel Sapón Díaz", org:"",
    charla:"Arquitectura de sistemas IoT con Arduino y ESP32", nivel:"Principiante", foto:"fotos/esdras.jpg",
    desc:"Los sistemas IoT modernos vistos desde un nivel ingenieril: cómo un dispositivo físico llega a considerarse una solución inteligente al capturar datos, comunicarse con otros dispositivos o plataformas digitales y aportar valor a la tecnología moderna. La audiencia se lleva cómo un dispositivo conectado recopila información del entorno, transmite datos y forma parte de soluciones aplicadas a varias industrias y a la vida personal."
  },
  roberto:{
    nombre:"Roberto Catalán", org:"",
    charla:"Del protoboard al servidor: tu propio centro de control", nivel:"Principiante", foto:"fotos/roberto.jpg",
    desc:"Descubrirás cómo pasar datos a pantallas en tiempo real de una manera fácil y dinámica. Traé teléfono Android e Internet."
  },
  aramy:{
    nombre:"Aramy Escobar", org:"",
    charla:"Arduino y la industria", nivel:"Principiante", foto:"fotos/aramy.jpg",
    desc:"Cómo Arduino y su plataforma van tomando relevancia poco a poco, no solo en proyectos de estudiantes sino también dentro de la industria."
  },
  bagur:{
    nombre:"José Bagur", org:"Universidad del Valle de Guatemala",
    charla:"Programa Espacial QUETZAL", nivel:"Principiante", foto:"fotos/bagur.jpg",
    desc:"El primer programa espacial de Guatemala, el Programa QUETZAL de la Universidad del Valle de Guatemala, y cómo dicho programa es una realidad gracias a tecnologías y plataformas de uso libre y abierto como Arduino."
  },
  pablo:{
    nombre:"Pablo Roberto González Quelex", org:"",
    charla:"Simulando Arduino en Velxio DEV", nivel:"Principiante", foto:"fotos/pablo.jpg",
    desc:"Simular Arduino usando la herramienta Velxio DEV: simuladores de acceso abierto para todos, con enfoque práctico."
  },
  cats:{
    nombre:"Electronic Cats", org:"México",
    charla:"Sesión invitada", nivel:"Invitado", foto:"fotos/cats.png",
    desc:"Participación especial del equipo de Electronic Cats, referente latinoamericano en hardware libre y desarrollo de dispositivos abiertos."
  }
};

/* orden en que se muestran las tarjetas */
const ORDEN = ["damaris","giovanni","douglas","jorge","victor","dennys","juan","esdras","roberto","aramy","bagur","pablo","cats"];

/* ---------- tarjetas de ponentes ---------- */
function claseNivel(n){
  if(n==="Principiante") return "et-verde";
  if(n==="Intermedio")   return "et-azul";
  return "et-taller";
}
function etiquetaNivel(n){
  if(n==="taller")  return "Taller";
  if(n==="keynote") return "Keynote";
  return n;
}
function marcoFoto(p, clase){
  if(p.foto) return '<div class="'+clase+'"><img src="'+p.foto+'" alt="'+p.nombre+'" loading="lazy" decoding="async" onerror="this.parentElement.textContent=\'Foto · '+p.nombre+'\'"></div>';
  return '<div class="'+clase+'">Foto · '+p.nombre+'</div>';
}

const grid = document.getElementById("grid-ponentes");
grid.innerHTML = ORDEN.map(function(id){
  const p = PONENTES[id];
  const org = p.org ? ' <span style="font-weight:600;color:var(--texto-2);font-size:.8rem">· '+p.org+'</span>' : '';
  return '<button class="ponente" data-p="'+id+'">'
       +   marcoFoto(p,"foto")
       +   '<div class="cuerpo">'
       +     '<div class="nombre">'+p.nombre+org+'</div>'
       +     '<div class="charla">'+p.charla+'</div>'
       +     '<p class="extracto">'+p.desc+'</p>'
       +     '<span class="etiqueta '+claseNivel(p.nivel)+'">'+etiquetaNivel(p.nivel)+'</span>'
       +   '</div>'
       + '</button>';
}).join("");

/* ============================================================
   PATROCINADORES — solo se muestran, sin ficha ni clic.
   Para agregar uno: poné el logo en /patrocinadores y agregá
   su nombre de archivo a la lista de abajo (ej. "empresa.png").
   ============================================================ */
const PATROCINADORES = [
   "1.png",
   "2.png",
   "3.jpg",
   "4.png",
   "5.png",
   "6.png",
   "7.png",
];

const gridPatro = document.getElementById("grid-patrocinadores");
if(gridPatro){
  gridPatro.innerHTML = PATROCINADORES.length
    ? PATROCINADORES.map(function(archivo){
        const alt = archivo.replace(/\.[^.]+$/,"").replace(/[-_]/g," ");
        return '<div class="patrocinador"><img src="patrocinadores/'+archivo+'" alt="'+alt+'" loading="lazy" decoding="async"></div>';
      }).join("")
    : '<p class="patro-vacio">Próximamente</p>';
}

/* ---------- ficha modal ---------- */
const overlay = document.getElementById("overlay");
const ficha   = document.getElementById("ficha");
let ultimoFoco = null;

function abrirFicha(id, hora, sala){
  const p = PONENTES[id];
  if(!p) return;

  const cajaFoto = document.getElementById("ficha-foto");
  cajaFoto.innerHTML = p.foto ? '<img src="'+p.foto+'" alt="'+p.nombre+'" loading="lazy" decoding="async" onerror="this.parentElement.textContent=\'Foto · '+p.nombre+'\'">' : 'Foto · '+p.nombre;

  let meta = '';
  if(hora) meta += '<span class="chip chip-hora">'+hora+'</span>';
  if(sala) meta += '<span class="chip chip-sala">'+sala+'</span>';
  meta += '<span class="chip '+claseNivel(p.nivel)+'">'+etiquetaNivel(p.nivel)+'</span>';
  document.getElementById("ficha-meta").innerHTML = meta;

  document.getElementById("ficha-titulo").textContent = p.charla;
  document.getElementById("ficha-quien").textContent  = p.nombre;
  document.getElementById("ficha-org").textContent    = p.org || "";
  document.getElementById("ficha-desc").textContent   = p.desc;

  ultimoFoco = document.activeElement;
  overlay.classList.add("abierto");
  document.body.classList.add("bloqueado");
  ficha.scrollTop = 0;
  document.getElementById("cerrar").focus();
}

function cerrarFicha(){
  overlay.classList.remove("abierto");
  document.body.classList.remove("bloqueado");
  if(ultimoFoco) ultimoFoco.focus();
}

/* delegación: sirve para agenda móvil, tabla y tarjetas */
document.addEventListener("click", function(e){
  const destino = e.target.closest("[data-p]");
  if(destino){
    abrirFicha(destino.dataset.p, destino.dataset.h, destino.dataset.s);
    return;
  }
  if(e.target === overlay || e.target.closest("#cerrar")) cerrarFicha();
});

/* enter/espacio en las celdas de la tabla */
document.addEventListener("keydown", function(e){
  if(e.key === "Escape" && overlay.classList.contains("abierto")){ cerrarFicha(); return; }
  if((e.key === "Enter" || e.key === " ")){
    const celda = e.target.closest("td[data-p]");
    if(celda){ e.preventDefault(); abrirFicha(celda.dataset.p, celda.dataset.h, celda.dataset.s); }
  }
});
