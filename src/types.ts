
export interface ICamaraFria {
  temperaturaAtual: number;
  faixaTemperatura: [number, number];
  motorLigado: boolean;
  ligarMotor(): void;
  desligarMotor(): void;
  atualizarTemperatura(): void;
}

export interface ISensorTemperatura {
  taxaResfriamento: number;
  taxaAquecimento: number;
  atrasoEfeito: number;
  calcularNovaTemperatura(
    temperaturaAtual: number,
    motorLigado: boolean,
    minutos: number
  ): number;
}

export interface IMotor {
  estado: boolean; 
  ligar(): void;
  desligar(): void;
}
