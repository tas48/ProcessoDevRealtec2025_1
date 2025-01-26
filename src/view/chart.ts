import Chart from 'chart.js/auto';
import { Camara } from "../core/Camara";

export function gerarGraficoTemperatura(camara: Camara): void {
  const dados = camara.obterDadosTemperatura();

    const container = document.createElement('div');
    container.className = 'container';

    const canvas = document.createElement('canvas');
    canvas.id = 'graficoTemperatura';

    container.appendChild(canvas);
    document.body.appendChild(container);

  const minutos = dados.map(dado => dado.minuto); // Eixo X: Minutos
  const temperaturas = dados.map(dado => dado.temperatura); // Eixo Y: Temperaturas

  console.log(minutos);
  console.log(temperaturas);

  const ctx = document.getElementById('graficoTemperatura') as HTMLCanvasElement;

  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: minutos,
        datasets: [{
          label: 'Temperatura (°C)',
          data: temperaturas, 
          borderColor: 'rgba(223, 60, 60, 0.8)',
          backgroundColor: 'rgba(231, 89, 89, 0.42)', 
          fill: true,
          tension: 0.1 
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
