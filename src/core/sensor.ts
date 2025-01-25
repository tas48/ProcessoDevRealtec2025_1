import { getTemperaturaAtual, getMotorLigado, setMotorLigado, taxaAquecimento, taxaResfriamento } from "./variables";

export function sensor(): void {
  const temperaturaAtual = getTemperaturaAtual();

  if (getMotorLigado() && temperaturaAtual - taxaResfriamento <= 4) {
    console.log("Temperatura atingiu o ponto de desligamento ideal.");
    setMotorLigado(false);
  } else if (!getMotorLigado() && temperaturaAtual + taxaAquecimento >= 7.5) {
    console.log("Temperatura atingiu o ponto de ativação ideal.");
    setMotorLigado(true);
  }
}
