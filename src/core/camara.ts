interface DadosTemperatura {
  minuto: number;
  temperatura: number;
}

export class Camara {
  private _temperaturaAtual: number;
  private _motorLigado: boolean;
  private _dadosTemperatura: DadosTemperatura[] = []; 


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

  public coletarDadosTemperatura(minuto: number, temperatura: number): void {
    const temperaturaFixada = parseFloat(temperatura.toFixed(2));
    const novoDado: DadosTemperatura = { minuto, temperatura: temperaturaFixada };
    this._dadosTemperatura.push(novoDado);
  }

  public obterDadosTemperatura(): DadosTemperatura[] {
    return this._dadosTemperatura;
  }
}
