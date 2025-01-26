export class Camara {
  private _temperaturaAtual: number;
  private _motorLigado: boolean;
  private _valoresSimulacao: string[] = []; // Array para armazenar valores da simulação

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

  public adicionarValorSimulacao(valor: string): void {
    this._valoresSimulacao.push(valor);
  }

  public getValoresSimulacao(): string[] {
    return [...this._valoresSimulacao];
  } 

  public getValoresSimulacaoComoString(): string {
    return this._valoresSimulacao.join("\n");
  }
}
