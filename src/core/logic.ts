const taxaAquecimento: number = 1.5;
const taxaResfriamento: number = 0.8;
const delay: number = 5;

let temperaturaAtual: number = 10;
let motorLigado: boolean = true;

function delayEfeito(): void {
  for (let i = 0; i < delay; i++) {
    if (motorLigado) {
      temperaturaAtual += taxaAquecimento;
    } else {
      temperaturaAtual -= taxaResfriamento;
    }
    console.log(`(Atraso) Minuto ${i + 1}: Temperatura = ${temperaturaAtual.toFixed(2)}°C`);
  }
}

function sensor(): void {
  if (motorLigado && (temperaturaAtual - taxaResfriamento) <= 4) {
    console.log("Temperatura atingiu o ponto de desligamento ideal.");
    motorLigado = false;
  } else if (!motorLigado && (temperaturaAtual + taxaAquecimento) >= 7.5) {
    console.log("Temperatura atingiu o ponto de ativação ideal.");
    motorLigado = true;
  }
}

function ligarMotor(): void {
  console.log("Motor LIGADO.");
  delayEfeito();

  while (motorLigado) {
    temperaturaAtual -= taxaResfriamento;
    console.log(`Temperatura descendo: ${temperaturaAtual.toFixed(2)}°C`);
    sensor();
  }
}

function desligarMotor(): void {
  console.log("Motor DESLIGADO.");
  delayEfeito();

  while (!motorLigado) {
    temperaturaAtual += taxaAquecimento;
    console.log(`Temperatura subindo: ${temperaturaAtual.toFixed(2)}°C`);
    sensor();
  }
}

function simularCamara(): void {
  console.log(`Iniciando simulação com temperatura inicial de ${temperaturaAtual}°C.`);
  while (true) {
    if (motorLigado) {
      ligarMotor();
    } else {
      desligarMotor();
    }
  }
}

simularCamara();
