import { simularCamara } from "./core/simulador";
import { Camara } from "./core/Camara";
import { criarLogContainer } from "./view/ui";
import { gerarGraficoTemperatura } from "./view/chart";


const camara = new Camara(10);
criarLogContainer();
simularCamara(camara);
gerarGraficoTemperatura(camara);
