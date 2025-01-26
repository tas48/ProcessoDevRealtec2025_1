import { Camara } from "./Camara";
import { ligarMotor, desligarMotor } from "./motor";
import { adicionarLogNaTela } from "../view/ui";

export function simularCamara(camara: Camara): void {
  adicionarLogNaTela(`Iniciando simulação com temperatura inicial de ${camara.getTemperaturaAtual()}°C.`);
  let i = 0;

  const intervalo = setInterval(() => {
    if (i >= 100) {
      clearInterval(intervalo);
      adicionarLogNaTela("Simulação concluída.");
      return;
    }

    if (camara.getMotorLigado()) {
      ligarMotor(camara);
    } else {
      desligarMotor(camara);
    }
    i++;
  }, 2000); 
}

