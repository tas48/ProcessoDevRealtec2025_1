import { Camara } from "./Camara";
import { ligarMotor, desligarMotor } from "./motor";
import { adicionarLogNaTela, obterTempoTotal } from "../view/ui";
import { gerarGraficoTemperatura } from "../view/chart";

export function simularCamara(camara: Camara): void {
  adicionarLogNaTela(`Iniciando simulação com temperatura inicial de ${camara.getTemperaturaAtual()}°C.`);
  let i = 0;

  const intervalo = setInterval(() => {
    if (i >= 4) {
      clearInterval(intervalo);
      adicionarLogNaTela("Simulação concluída.");
      adicionarLogNaTela(`Tempo total da simulação: ${obterTempoTotal(camara)} minutos.`);
      console.log(camara.obterDadosTemperatura());
      gerarGraficoTemperatura(camara)
      return;
    }

    if (camara.getMotorLigado()) {
      ligarMotor(camara);
    } else {
      desligarMotor(camara);
    }
    i++;
  }, 500); 
}
