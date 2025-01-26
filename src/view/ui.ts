export function criarLogContainer(): void {

  const logContainer = document.createElement("div");
  logContainer.id = "logTemperatura";
  logContainer.style.height = "300px";
  logContainer.style.width = "700px";
  logContainer.style.overflowY = "auto";
  logContainer.style.border = "1px solid #ccc";
  logContainer.style.padding = "10px";
  logContainer.style.marginTop = "20px";
  logContainer.style.fontFamily = "Arial, sans-serif";
  logContainer.style.fontSize = "14px";
  logContainer.style.lineHeight = "1.5";
  logContainer.style.backgroundColor = "#f9f9f9";
  logContainer.style.position = "absolute";
  logContainer.style.left = "50%";
  logContainer.style.transform = "translateX(-50%)";
  logContainer.style.top = "50px";

  document.body.appendChild(logContainer);
}

export function adicionarLogNaTela(mensagem: string, cor: string = "black"): void {
  const logContainer = document.getElementById("logTemperatura") as HTMLDivElement;

  if (logContainer) {
    // Quebrando a mensagem em linhas individuais
    const linhas = mensagem.split("\n");

    // Adiciona cada linha uma por vez com um pequeno atraso
    linhas.forEach((linha, index) => {
      setTimeout(() => {
        const novoLog = document.createElement("p");
        novoLog.textContent = linha;
        novoLog.style.margin = "0";
        novoLog.style.padding = "5px 0";
        novoLog.style.color = cor;
        novoLog.style.transition = "opacity 0.5s ease, transform 0.5s ease"; // Animações suaves
        novoLog.style.opacity = "0";
        novoLog.style.transform = "translateY(10px)";

        // Adiciona o log ao contêiner
        logContainer.appendChild(novoLog);

        // Animação suave: Exibe o log gradualmente
        requestAnimationFrame(() => {
          novoLog.style.opacity = "1";
          novoLog.style.transform = "translateY(0)";
        });

        // Rola automaticamente para o final do contêiner (somente após a primeira linha ser exibida)
        logContainer.scrollTop = logContainer.scrollHeight;
      }, index * 2300); // Cada linha aparece com 0.5s de intervalo
    });
  } else {
    console.warn("Contêiner de log não encontrado. Certifique-se de chamá-lo primeiro com criarLogContainer().");
  }
}
