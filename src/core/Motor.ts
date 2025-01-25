import { Camara } from "./camara";
import { sensor } from "./sensor";

export function delayEfeito(camara: Camara): void {
  for (let i = 0; i < 5; i++) {
    if (camara.getMotorLigado()) {
      camara.setTemperaturaAtual(camara.getTemperaturaAtual() + 1.5);
    } else {
      camara.setTemperaturaAtual(camara.getTemperaturaAtual() - 0.8);
    }
    console.log(`(Atraso) Minuto ${i + 1}: Temperatura = ${camara.getTemperaturaAtual().toFixed(2)}°C`);
  }
}

export function ligarMotor(camara: Camara): void {
  console.log("Motor LIGADO.");
  delayEfeito(camara);

  while (camara.getMotorLigado()) {
    camara.setTemperaturaAtual(camara.getTemperaturaAtual() - 0.8);
    console.log(`Temperatura descendo: ${camara.getTemperaturaAtual().toFixed(2)}°C`);
    sensor(camara);
  }
}

export function desligarMotor(camara: Camara): void {
  console.log("Motor DESLIGADO.");
  delayEfeito(camara);

  while (!camara.getMotorLigado()) {
    camara.setTemperaturaAtual(camara.getTemperaturaAtual() + 1.5);
    console.log(`Temperatura subindo: ${camara.getTemperaturaAtual().toFixed(2)}°C`);
    sensor(camara);
  }
}
