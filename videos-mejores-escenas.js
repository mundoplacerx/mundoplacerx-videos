const videos = [
  {
    titulo: "A goal into stepmom's pussy - Richelle Ryan",
    iframe: <iframe src="https://streamtape.com/e/bZWr9WOkKBUPPAz/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>,
    banner: `<script type="text/javascript">juicy_adzone = '1089716';</script>
             <script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>`
  },
  {
    titulo: "Jerking Off Using Stepmoms Shampoo - Rachael Cavalli",
    iframe: <iframe src="https://streamtape.com/e/mw3W8bMrGbtb3Px/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>,
    banner: `<script type="text/javascript">juicy_adzone = '1089718';</script>
             <script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>`
  },
  {
    titulo: "Step Mom Wants To Get Horny - Cherie Deville",
    iframe: <iframe src="https://streamtape.com/e/px096q9jvpcWkk/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>,
    banner: `<script type="text/javascript">juicy_adzone = '1089716';</script>
             <script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>`
  },
  {
    titulo: "Pullout Training With Girlfriends Stepmom - Charlie Forde",
    iframe: <iframe src="https://streamtape.com/e/AAKBMp9Y1QIXA8b/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>,
    banner: `<script type="text/javascript">juicy_adzone = '1089718';</script>
             <script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>`
  }
];

// Mostrar videos con paginación
const videosPorPagina = 3;
let paginaActual = 1;

function renderVideos() {
  const contenedor = document.getElementById("contenedor-videos-mejores-escenas");
  contenedor.innerHTML = "";

  const inicio = (paginaActual - 1) * videosPorPagina;
  const fin = inicio + videosPorPagina;
  const videosPagina = [...videos].reverse().slice(inicio, fin);

  videosPagina.forEach(video => {
    const html = `
      <div style="margin-bottom: 40px;">
        <h2 style="color: #ff4d88; font-weight: bold; text-align: center;">${video.titulo}</h2>
        <div style="position: relative;">
          <div style="position: absolute; top: 0; left: 0; right: 0; z-index: 10;">
            ${video.banner}
          </div>
          ${video.iframe}
        </div>
        <p style="color: #ccc; text-align: center; margin-top: 15px;">
          Haz click en el botón del anuncio para continuar con el video. Disculpa la publicidad, es lo que permite que esta página siga existiendo. 
          Si deseas ver este video sin anuncios o tener acceso a contenido personalizado, puedes escribirnos en nuestra 
          <a href="https://www.mundoplacerx.com/p/contacto.html" style="color: #ff4d88; font-weight: bold;">página de contacto</a>.
        </p>
      </div>`;
    contenedor.innerHTML += html;
  });

  renderPaginacion();
}

function renderPaginacion() {
  const paginacion = document.getElementById("paginacion-videos");
  paginacion.innerHTML = "";

  const totalPaginas = Math.ceil(videos.length / videosPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.style.margin = "0 5px";
    btn.style.padding = "6px 12px";
    btn.style.border = "1px solid #ccc";
    btn.style.background = i === paginaActual ? "#ff4d88" : "#f9f9f9";
    btn.style.color = i === paginaActual ? "#fff" : "#333";
    btn.style.cursor = "pointer";
    btn.onclick = () => {
      paginaActual = i;
      renderVideos();
    };
    paginacion.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", renderVideos);