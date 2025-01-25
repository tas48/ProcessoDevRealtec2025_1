import { Camara } from "./camara";

export function sensor(camara: Camara): void {
  const temperaturaAtual = camara.getTemperaturaAtual();

  if (camara.getMotorLigado() && temperaturaAtual - 0.8 <= 4) {
    console.log("Temperatura atingiu o ponto de desligamento ideal.");
    camara.setMotorLigado(false);
  } else if (!camara.getMotorLigado() && temperaturaAtual + 1.5 >= 7.5) {
    console.log("Temperatura atingiu o ponto de ativação ideal.");
    camara.setMotorLigado(true);
  }
}
