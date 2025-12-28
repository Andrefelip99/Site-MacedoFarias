(function () {

  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1; // Janeiro = 1, Dezembro = 12

  // período ativo: 28/12 até 02/01
  const periodoAnoNovo =
    (mes === 12 && dia >= 28) || // Dezembro
    (mes === 1 && dia <= 2);     // Janeiro

  if (!periodoAnoNovo) return;
  /* =========================
     CSS
  ========================== */
  const style = document.createElement("style");
  style.innerHTML = `
    .confete {
      position: fixed;
      top: -10px;
      width: 6px;
      height: 16px;
      opacity: 0.8;
      animation: cair linear infinite;
      z-index: 9999;
      pointer-events: none;
    }

    @keyframes cair {
      from { transform: translateY(0) rotate(0deg); }
      to { transform: translateY(110vh) rotate(360deg); }
    }

    .msg-ano-novo {
      position: fixed;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.75);
      color: #fff;
      padding: 20px 30px;
      border-radius: 16px;
      font-size: 28px;
      font-family: 'Playfair Display', serif;
      z-index: 10000;
      opacity: 0;
      animation: aparecer 0.8s forwards, sumir 0.8s forwards 3.5s;
      pointer-events: none;
    }

    @keyframes aparecer {
      from { opacity: 0; transform: translate(-50%, -20px); }
      to { opacity: 1; transform: translate(-50%, 0); }
    }

    @keyframes sumir {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  /* =========================
     Mensagem
  ========================== */
  const msg = document.createElement("div");
  msg.className = "msg-ano-novo";
  msg.innerText = "✨ Macedo Farias deseja a todos vocês um     Feliz Ano Novo ✨";

  // =========================
  // Ajuste mobile
  // =========================
  function ajustarMensagem() {
    if (window.innerWidth <= 768) {
      msg.style.fontSize = "18px";
      msg.style.padding = "12px 18px";
      msg.style.top = "15%";
    } else {
      msg.style.fontSize = "28px";
      msg.style.padding = "20px 30px";
      msg.style.top = "25%";
    }
  }

  ajustarMensagem();
  window.addEventListener("resize", ajustarMensagem);

  document.body.appendChild(msg);

  // remove mensagem depois da animação
  setTimeout(() => msg.remove(), 4500);

  /* =========================
     Confetes
  ========================== */
  const cores = ["#FFD700", "#FFFFFF", "#E5E5E5"];

  for (let i = 0; i < 30; i++) {
    const confete = document.createElement("div");
    confete.className = "confete";

    confete.style.background =
      cores[Math.floor(Math.random() * cores.length)];

    confete.style.left = Math.random() * 100 + "vw";
    confete.style.animationDuration = 4 + Math.random() * 4 + "s";
    confete.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(confete);
  }
})();
