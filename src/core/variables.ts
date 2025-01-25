let _temperaturaAtual: number = 10;
let _motorLigado: boolean = true;

export const taxaAquecimento: number = 1.5;
export const taxaResfriamento: number = 0.8;
export const delay: number = 5;

export function getTemperaturaAtual(): number {
  return _temperaturaAtual;
}

export function setTemperaturaAtual(valor: number): void {
  _temperaturaAtual = valor;
}

export function getMotorLigado(): boolean {
  return _motorLigado;
}

export function setMotorLigado(valor: boolean): void {
  _motorLigado = valor;
}
