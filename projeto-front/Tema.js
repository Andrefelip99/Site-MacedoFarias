document.addEventListener('DOMContentLoaded', function() {
  console.log("🎨 DOMContentLoaded - Tema.js iniciado");
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1; // Janeiro = 1, Dezembro = 12
  console.log(`📅 Data atual: ${dia}/${mes}`);

  // periodo ativo: 28/12 ate 02/01
  const periodoAnoNovo = (mes === 12 && dia >= 28) || (mes === 1 && dia <= 2);
  console.log(`🎄 Período Ano Novo: ${periodoAnoNovo}`);

  // periodo ativo Pascoa: 01/03 ate 06/03 (teste hoje)
  const periodoPascoa = (mes === 3 && dia >= 1 && dia <= 6) || (mes === 3 && dia === 25); // teste hoje
  console.log(`🐣 Período Páscoa: ${periodoPascoa}`);

  if (!periodoAnoNovo && !periodoPascoa) {
    console.log("❌ Nenhum período ativo, saindo...");
    return;
  }

  if (periodoAnoNovo) {
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
        color: #FFD700; /* dourado */
        padding: 20px 30px;
        border-radius: 16px;
        font-size: 28px;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        text-align: center;
        text-shadow: 0 0 10px #FFD700, 0 0 20px #FFFFFF, 0 0 30px #FFD700;
        z-index: 10000;
        opacity: 0;
        animation: aparecer 0.8s forwards, sumir 0.8s forwards 9.2s; /* comeca a sumir aos 9.2s */
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
    msg.innerText = "A Macedo Farias Deseja a Voce um Feliz Ano Novo";

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

    // remove mensagem depois de 5 segundos
    setTimeout(() => msg.remove(), 5000);

    /* =========================
       Confetes
    ========================== */
    const cores = ["#FFD700", "#FFFFFF", "#E5E5E5"];

    for (let i = 0; i < 30; i++) {
      const confete = document.createElement("div");
      confete.className = "confete";

      confete.style.background = cores[Math.floor(Math.random() * cores.length)];
      confete.style.left = Math.random() * 100 + "vw";
      confete.style.animationDuration = 4 + Math.random() * 4 + "s";
      confete.style.animationDelay = Math.random() * 3 + "s";

      document.body.appendChild(confete);
    }
  }

  if (periodoPascoa) {
    console.log("🎉 Período de Páscoa ativo! Criando ovos...");
    console.log("📄 DOM ready:", document.readyState);
    console.log("🏠 Body exists:", !!document.body);
    const style = document.createElement("style");
    style.innerHTML = `
      .ovo-pascoa {
        position: fixed;
        top: -20px;
        width: 20px;
        height: 28px;
        border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
        opacity: 0.9;
        animation: cair-ovo 3s linear 1 forwards;
        z-index: 9999;
        pointer-events: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
      }

      /* sem laco no topo para visual limpo de ovo */
      .ovo-pascoa::before {
        content: none;
      }

      .ovo-pascoa::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 6px;
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
        border-radius: 50%;
        z-index: 1;
      }

      @keyframes cair-ovo {
        from { transform: translateY(0) rotate(0deg); }
        to { transform: translateY(110vh) rotate(360deg); }
      }

      .msg-pascoa {
        position: fixed;
        top: 22%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.9);
        color: #7a4c2c;
        padding: 16px 26px;
        border-radius: 14px;
        font-size: 26px;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        text-align: center;
        z-index: 10000;
        opacity: 0;
        animation: aparecer-pascoa 0.8s forwards, sumir-pascoa 0.8s forwards 9.2s;
        pointer-events: none;
      }

      @keyframes aparecer-pascoa {
        from { opacity: 0; transform: translate(-50%, -20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
      }

      @keyframes sumir-pascoa {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    /* =========================
       Mensagem Pascoa
    ========================== */
    const msgPascoa = document.createElement("div");
    msgPascoa.className = "msg-pascoa";
    msgPascoa.innerText = "Feliz Páscoa!";

    function ajustarMensagemPascoa() {
      if (window.innerWidth <= 768) {
        msgPascoa.style.fontSize = "18px";
        msgPascoa.style.padding = "12px 18px";
        msgPascoa.style.top = "14%";
      } else {
        msgPascoa.style.fontSize = "26px";
        msgPascoa.style.padding = "16px 26px";
        msgPascoa.style.top = "22%";
      }
    }

    ajustarMensagemPascoa();
    window.addEventListener("resize", ajustarMensagemPascoa);
    document.body.appendChild(msgPascoa);

    setTimeout(() => msgPascoa.remove(), 5000);

    /* =========================
       Ovos caindo
    ========================== */
    const coresOvos = [
      "linear-gradient(135deg, #ffb3ba, #ff9aa2)",
      "linear-gradient(135deg, #bae1ff, #a8d8ff)",
      "linear-gradient(135deg, #ffffba, #ffff9a)",
      "linear-gradient(135deg, #baffc9, #a8ffb3)",
      "linear-gradient(135deg, #ffd4a3, #ffb366)",
      "linear-gradient(135deg, #e6baff, #d4a3ff)",
      "linear-gradient(135deg, #ffb3d4, #ff9abf)",
      "linear-gradient(135deg, #a3d4ff, #66b3ff)",
      "linear-gradient(135deg, #ffffd4, #ffff99)",
      "linear-gradient(135deg, #d4ffb3, #99ff66)"
    ];

    for (let i = 0; i < 26; i++) {
      const ovo = document.createElement("div");
      ovo.className = "ovo-pascoa";

      ovo.style.background = coresOvos[i % coresOvos.length];
      ovo.style.left = Math.random() * 100 + "vw";
      ovo.style.animationDuration = "3s";              // cai durante 3s
      ovo.style.animationDelay = Math.random() * 3 + "s"; // espalha inicio dos ovos

      document.body.appendChild(ovo);
    }
  }
});
