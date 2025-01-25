import { Camara } from "./camara";
import { ligarMotor, desligarMotor } from "./motor";

export function simularCamara(camara: Camara): void {
  console.log(`Iniciando simulação com temperatura inicial de ${camara.getTemperaturaAtual()}°C.`);
  let i = 0;

  const intervalo = setInterval(() => {
    if (i >= 100) {
      clearInterval(intervalo); // Encerra o intervalo quando o loop atinge o limite
      console.log("Simulação concluída.");
      return;
    }

    if (camara.getMotorLigado()) {
      ligarMotor(camara);
    } else {
      desligarMotor(camara);
    }

    i++;
  }, 1000); // Executa o bloco de código a cada 1 segundo
}
