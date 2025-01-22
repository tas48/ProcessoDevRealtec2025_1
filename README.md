# Simulador de Temperatura em Tempo Real

Este projeto em desenvolvimento irá simular o controle de temperatura de uma câmara fria, exibindo os dados de temperatura em tempo real em um gráfico interativo. A temperatura é atualizada a cada segundo, com valores simulados para fins de demonstração.

## Tecnologias Utilizadas

- **TypeScript**: Para garantir um código tipado e mais seguro e dar vida a interface.
- **Vite**: Ferramenta de build moderna para facilitar o desenvolvimento com TypeScript.
- **HMTL E CSS**: Para criação da interface estática.
- **Chart.js**: Biblioteca para criar gráficos interativos.
- **chartjs-plugin-streaming**(avaliando sobre): Plugin do Chart.js para permitir a atualização dinâmica de gráficos.

## Ver o funcionamento(trabalhando ainda)
Acessando este link: (firebase link here) você conseguirá ver o projeto rodando 

## Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone <URL do repositório>
cd <diretório do projeto>
```

### 2. Instalar as dependências

Instale as dependências utilizando o comando:

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

Após instalar as dependências, execute o comando abaixo para rodar o servidor:

```bash
npm run dev
```

O projeto estará disponível em **http://localhost:5173** (ou o endereço fornecido no terminal).

### 4. Verificar a Simulação

Ao acessar o endereço acima, você verá um gráfico de temperatura atualizando a cada segundos com valores simulados. O gráfico utiliza a biblioteca **Chart.js** e o plugin **chartjs-plugin-streaming** para exibir e atualizar os dados em tempo real.

## Estrutura do Projeto

- **`src/`**: Contém os arquivos principais do código-fonte.
  - **`assets/`**: Contém os arquivos de estilização CSS.
  - **`core/`**: Contém as classes de lógica de controle de temperatura.
  - **`view/`**: Responsável pela interface gráfica.
  - **`main.ts`**: Arquivo principal para inicializar o aplicativo.
  - **`main.ts`**: Arquivo de tipagem com as Interfaces a serem ultilizadas, visando garantir melhor organização
- **`index.html`**: Arquivo HTML com o container para o app.

## Personalização
Ainda a ser feito 


