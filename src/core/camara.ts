import { getMotorLigado, getTemperaturaAtual } from "./variables";
import { ligarMotor, desligarMotor } from "./motor";

export function simularCamara(): void {
  console.log(`Iniciando simulação com temperatura inicial de ${getTemperaturaAtual()}°C.`);
  let i = 0;

  const intervalo = setInterval(() => {
    if (i >= 100) {
      clearInterval(intervalo); 
      console.log("Simulação concluída.");
      return;
    }

    if (getMotorLigado()) {
      ligarMotor();
    } else {
      desligarMotor();
    }

    i++;
  }, 1000); // Executa o bloco de código a cada 1 segundo
}
