const videos = [
  {
    titulo: "A goal into stepmom's pussy - Richelle Ryan",
    iframe: '<iframe src="https://streamtape.com/e/bZWr9WOkKBUPPAz/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
    banner: '<script type="text/javascript">juicy_adzone = "1089716";</script><script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>'
  },
  {
    titulo: "Jerking Off Using Stepmoms Shampoo - Rachael Cavalli",
    iframe: '<iframe src="https://streamtape.com/e/mw3W8bMrGbtb3Px/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
    banner: '<script type="text/javascript">juicy_adzone = "1089718";</script><script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>'
  },
  {
    titulo: "Step Mom Wants To Get Horny - Cherie Deville",
    iframe: '<iframe src="https://streamtape.com/e/px096q9jypcWkk/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>',
    banner: '<script type="text/javascript">juicy_adzone = "1089716";</script><script type="text/javascript" src="https://poweredby.jads.co/js/jfc.js" charset="utf-8"></script>'
  }
];

// Mostrar los videos en bloques de 3 por página
const container = document.getElementById("videoContainer");
if (container && videos.length) {
  const paginacion = 3;
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("page")) || 1;
  const start = (page - 1) * paginacion;
  const currentVideos = videos.slice(start, start + paginacion);

  currentVideos.forEach(video => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${video.titulo}</h3>${video.iframe}${video.banner}`;
    container.appendChild(div);
  });

  // Agregar controles de navegación
  const totalPages = Math.ceil(videos.length / paginacion);
  if (totalPages > 1) {
    const nav = document.createElement("div");
    nav.style.marginTop = "20px";
    for (let i = 1; i <= totalPages; i++) {
      const link = document.createElement("a");
      link.href = `?page=${i}`;
      link.innerText = `[${i}] `;
      nav.appendChild(link);
    }
    container.appendChild(nav);
  }
}
