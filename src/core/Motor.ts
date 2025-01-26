import { adicionarLogNaTela } from "../view/ui";
import { Camara } from "./Camara";
import { sensor } from "./sensor";

let tempo = 1;

export function delayEfeito(camara: Camara): void {
  for (let i = 0; i < 5; i++) {
    sensor(camara, tempo);
    tempo++;
    if (camara.getMotorLigado()) {
      camara.setTemperaturaAtual(camara.getTemperaturaAtual() + 1.5);
    } else {
      camara.setTemperaturaAtual(camara.getTemperaturaAtual() - 0.8);
    }
    adicionarLogNaTela(`[Atraso] Temperatura = ${camara.getTemperaturaAtual().toFixed(2)}°C`);
  }
}

export function ligarMotor(camara: Camara): void {
  adicionarLogNaTela("[ON] MOTOR LIGADO", "green");
  delayEfeito(camara);

  while (camara.getMotorLigado()) {
    camara.setTemperaturaAtual(camara.getTemperaturaAtual() - 0.8);
    adicionarLogNaTela(`[-] Temperatura descendo: ${camara.getTemperaturaAtual().toFixed(2)}°C`, "blue");
    sensor(camara, tempo);
    tempo++;
  }
}

export function desligarMotor(camara: Camara): void {
  adicionarLogNaTela("[OFF] MOTOR DESLIGADO", "red");
  delayEfeito(camara);

  while (!camara.getMotorLigado()) {
    camara.setTemperaturaAtual(camara.getTemperaturaAtual() + 1.5);
    adicionarLogNaTela(`[+] Temperatura subindo: ${camara.getTemperaturaAtual().toFixed(2)}°C`, "purple");
    sensor(camara, tempo);
    tempo++;
  }
}
