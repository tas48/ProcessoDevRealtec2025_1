import { Camara } from "../core/Camara";

export function criarLogContainer(): void {
  const logContainer = document.createElement("div");
  logContainer.id = "logTemperatura"; 
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

export function obterTempoTotal(camara: Camara): number | null {
  const dados = camara.obterDadosTemperatura();
  if (dados.length === 0) {
    return null; 
  }
  return dados[dados.length - 1].minuto;
}



