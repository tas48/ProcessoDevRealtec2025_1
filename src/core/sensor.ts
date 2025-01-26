import { adicionarLogNaTela } from "../view/ui";
import { Camara } from "./Camara";

export function sensor(camara: Camara): void {
  const temperaturaAtual = camara.getTemperaturaAtual();

  if (camara.getMotorLigado() && temperaturaAtual - 0.8 <= 4) {
    adicionarLogNaTela("[SENSOR] Temperatura atingiu o ponto de desligamento ideal.", "brown");
    camara.setMotorLigado(false);
  } else if (!camara.getMotorLigado() && temperaturaAtual + 1.5 >= 7.5) {
    adicionarLogNaTela("[SENSOR] Temperatura atingiu o ponto de ativação ideal.", "brown");
    camara.setMotorLigado(true);
  }
}
