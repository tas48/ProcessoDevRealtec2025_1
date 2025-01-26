import Chart from 'chart.js/auto';
import { Camara } from "../core/Camara";

export function gerarGraficoTemperatura(camara: Camara): void {
  const dados = camara.obterDadosTemperatura();

  const minutos = dados.map(dado => dado.minuto); // Eixo X: Minutos
  const temperaturas = dados.map(dado => dado.temperatura); // Eixo Y: Temperaturas

  const ctx = document.getElementById('graficoTemperatura') as HTMLCanvasElement;

  if (ctx) {
    new Chart(ctx, {
      type: 'line', // Tipo de gráfico: linha
      data: {
        labels: minutos, // Rótulos do eixo X
        datasets: [{
          label: 'Temperatura (°C)',
          data: temperaturas, // Dados para o eixo Y
          borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo da linha
          fill: true, // Preencher abaixo da linha
          tension: 0.1 // Suavização da linha
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Minutos'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Temperatura (°C)'
            }
          }
        }
      }
    });
  }
}
