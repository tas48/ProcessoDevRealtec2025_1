import { simularCamara } from "./core/simulador";
import { Camara } from "./core/Camara";
import { criarLogContainer } from "./view/ui";


const camara = new Camara(10);
criarLogContainer();
simularCamara(camara);
