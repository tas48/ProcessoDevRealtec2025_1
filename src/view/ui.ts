export function criarLogContainer(): void {
  const logContainer = document.createElement("div");
  logContainer.id = "logTemperatura"; // A classe CSS será aplicada via id

  // Apenas adiciona o contêiner ao corpo, sem estilização inline
  document.body.appendChild(logContainer);
}

export function adicionarLogNaTela(mensagem: string, cor: string = "black"): void {
  const logContainer = document.getElementById("logTemperatura") as HTMLDivElement;

  if (logContainer) {
    const linhas = mensagem.split("\n");

    linhas.forEach((linha) => {
      const novoLog = document.createElement("p");
      novoLog.textContent = linha;
      novoLog.style.color = cor;

      logContainer.appendChild(novoLog);

      // Exibe o log com animação
      setTimeout(() => {
        novoLog.classList.add("show");
      }, 0);
    });
  } else {
    console.warn("Contêiner de log não encontrado.");
  }
}



