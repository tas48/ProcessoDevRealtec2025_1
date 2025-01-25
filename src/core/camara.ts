export class Camara {
  private _temperaturaAtual: number;
  private _motorLigado: boolean;

  constructor(temperaturaInicial: number = 10) {
    this._temperaturaAtual = temperaturaInicial;
    this._motorLigado = true;
  }

  public getTemperaturaAtual(): number {
    return this._temperaturaAtual;
  }

  public setTemperaturaAtual(valor: number): void {
    this._temperaturaAtual = valor;
  }

  public getMotorLigado(): boolean {
    return this._motorLigado;
  }

  public setMotorLigado(valor: boolean): void {
    this._motorLigado = valor;
  }
}
