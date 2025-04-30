const videos = [
  {
    titulo: "My dad’s hot girlfriend - Eva Angelina",
    iframe: `<iframe src="https://streamtape.com/e/dZoXMemOQysGR1/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>`,
    banner: `<script type="text/javascript">juicy_adzone = '1089716';</script>
             <script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>`
  },
  {
    titulo: "Pullout Training With Girlfriends Stepmom - Charlie Forde",
    iframe: `<iframe src="https://streamtape.com/e/AAKBMp9Y1QIXA8b/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>`,
    banner: `<script type="text/javascript">juicy_adzone = '1089718';</script>
             <script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>`
  },
    {
    titulo: "Step Mom Wants To Get Horny - Cherie Deville",
    iframe: `<iframe src="https://streamtape.com/e/px096q9jvpcWkk/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>`,
    banner: `<script type="text/javascript">juicy_adzone = '1089716';</script>
             <script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>`
  },
    {
    titulo: "Jerking Off Using Stepmoms Shampoo - Rachael Cavalli",
    iframe: `<iframe src="https://streamtape.com/e/mw3W8bMrGbtb3Px/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>`,
    banner: `<script type="text/javascript">juicy_adzone = '1089718';</script>
             <script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>`
  },
];

// Reversa para mostrar primero los más nuevos
videos.reverse();

const videosPorPagina = 3;
let paginaActual = 1;

function mostrarVideos(pagina) {
  const contenedor = document.getElementById('videoContainer');
  contenedor.innerHTML = '';

  const inicio = (pagina - 1) * videosPorPagina;
  const fin = inicio + videosPorPagina;
  const videosPagina = videos.slice(inicio, fin);

  videosPagina.forEach(video => {
    const videoHTML = `
      <div style="margin-bottom: 50px;">
        <h2 style="color: #ff4da6; font-weight: bold;">${video.titulo}</h2>
        ${video.banner}
        ${video.iframe}
      </div>
    `;
    contenedor.innerHTML += videoHTML;
  });

  mostrarPaginacion();
}

function mostrarPaginacion() {
  const totalPaginas = Math.ceil(videos.length / videosPorPagina);
  const paginacionHTML = document.createElement('div');
  paginacionHTML.style.marginTop = '30px';
  paginacionHTML.style.textAlign = 'center';

  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement('button');
    boton.innerText = i;
    boton.style.margin = '0 5px';
    boton.style.padding = '5px 10px';
    boton.style.border = 'none';
    boton.style.backgroundColor = i === paginaActual ? '#ff4da6' : '#ccc';
    boton.style.color = i === paginaActual ? '#fff' : '#000';
    boton.style.cursor = 'pointer';
    boton.onclick = () => {
      paginaActual = i;
      mostrarVideos(paginaActual);
    };
    paginacionHTML.appendChild(boton);
  }

  document.getElementById('videoContainer').appendChild(paginacionHTML);
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarVideos(paginaActual);
});
