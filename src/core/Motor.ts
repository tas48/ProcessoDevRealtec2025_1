import { getTemperaturaAtual, setTemperaturaAtual, getMotorLigado, taxaAquecimento, taxaResfriamento, delay } from "./variables";
import { sensor } from "./sensor";

function delayEfeito(): void {
  for (let i = 0; i < delay; i++) {
    if (getMotorLigado()) {
      setTemperaturaAtual(getTemperaturaAtual() + taxaAquecimento);
    } else {
      setTemperaturaAtual(getTemperaturaAtual() - taxaResfriamento);
    }
    console.log(`(Atraso) Minuto ${i + 1}: Temperatura = ${getTemperaturaAtual().toFixed(2)}°C`);
  }
}

export function ligarMotor(): void {
  console.log("Motor LIGADO.");
  delayEfeito();

  while (getMotorLigado()) {
    setTemperaturaAtual(getTemperaturaAtual() - taxaResfriamento);
    console.log(`Temperatura descendo: ${getTemperaturaAtual().toFixed(2)}°C`);
    sensor();
  }
}

export function desligarMotor(): void {
  console.log("Motor DESLIGADO.");
  delayEfeito();

  while (!getMotorLigado()) {
    setTemperaturaAtual(getTemperaturaAtual() + taxaAquecimento);
    console.log(`Temperatura subindo: ${getTemperaturaAtual().toFixed(2)}°C`);
    sensor();
  }
}
