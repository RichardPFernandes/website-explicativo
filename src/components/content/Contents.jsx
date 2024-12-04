export function getContent(assunto) {
    const listaContent = {
      javascript: {
        title: "Javascript no Frontend",
        topics: [
          "Manipulação de DOM",
          "Eventos",
          "Manipulação de dados",
          "Fetch API",
          "Cursiosidades"
        ],
        content: [
          {
            tag: "<document.getElementById>",
            description: "Criação e Manipulação de Elementos",
            topics: "Manipulação de DOM",
          },
   
          {
            tag: "<addEventListener>",
            description: "Para eventos como click, mouseover",
            topics: "Eventos",
          },
          {
            tag: "<arrays>",
            description: "map, filter, reduce",
            topics: "Manipulação de dados",
          },
          {
            tag: "<fetch>",
            description: "Pfetch, Promises, Async/Awaitarágrafo",
            topics: "Fetch API",
          },
          {
            tag: "<curiosidades>",
            description: "O JavaScript no front-end usa um Event Loop para gerenciar a execução de código assíncrono, como setTimeout ou requisições de rede. Mesmo sendo uma linguagem de thread única, ele não bloqueia o código principal. Quando uma operação assíncrona termina, ela entra na fila de tarefas e o Event Loop a processa assim que a pilha de execução (call stack) estiver vazia. Promises têm maior prioridade, sendo processadas antes de outras tarefas, o que pode afetar a ordem de execução e causar comportamentos inesperados se não for bem entendido.",
            topics: "Cursiosidades",
          },
        ],
      },
      css: {
        title: "CSS da página",
        topics: [
          "Seletores",
          "Propriedades de Texto",
          "Propriedades de Layout",
          "Box Model",
          "Background",
          "Flexbox e Grid"
        ],
        content: [
            {
              tag: "Classes",
              description: "Seleciona elementos com classe específica",
              topics: "Seletores",
              example: `
                .destaque {
                  color: red;
                }
              `
            },
          {
            tag: "IDs",
            description: "#id seleciona elementos com ID específico.",
            topics: "Seletores",
            example: `
              #destaque {
                color: red;
              }
            `
          },
          {
            tag: "Elementos",
            description: "Elemento seleciona todos os elementos do tipo.",
            topics: "Seletores",
            example: `
              p {
                color: red;
              }
            `
          },
          {
            tag: "Atributos",
            description: "[atributo] seleciona com base nos atributos.",
            topics: "Seletores",
            example: `
            input[type="text"] {
                color: red;
                }
                `
          },
          {
            tag: "Pseudo-classes",
            description: ":hover, :focus aplicam estilos em interações.",
            topics: "Seletores",
            example: `
            a:hover {
                color: red;
                }
                `
          },
          {
            tag: "Pseudo-elementos",
            description: "::before, ::after para conteúdo virtual.",
            topics: "Seletores",
            example: `
            p::before {
                content: "Texto antes";
                }
                `
          },
          {
            tag: "color",
            description: "Cor do texto.",
            topics: "Propriedades de Texto",
            example: `
            p {
  color: #333;
}
                `
          },
          {
            tag: "font-size",
            description: "Tamanho da Fonte",
            topics: "Propriedades de Texto",
            example: `
            h1 {
  font-size: 2em;
}
                `
          },
          {
            tag: "font-weight",
            description: "Peso da Fonte",
            topics: "Propriedades de Texto",
            example: `
            strong {
  font-weight: bold;
}
                `
          },
          {
            tag: "line-weight",
            description: "Altura da Linha",
            topics: "Propriedades de Texto",
            example: `
            p {
  line-height: 1.5;
}
                `
          },
          {
            tag: "text-align",
            description: "Alinhamento de Texto",
            topics: "Propriedades de Texto",
            example: `
            h1 {
  text-align: center;
}
                `
          },
          {
            tag: "display",
            description: "Define layout (block, inline, flex, grid).",
            topics: "Propriedades de Layout",
            example: `
            .flex-container {
  display: flex;
}
                `
          },
          {
            tag: "position",
            description: "Posicionamento (static, relative, absolute, fixed).",
            topics: "Propriedades de Layout",
            example: `
            .absoluto {
  position: absolute;
  top: 0;
  left: 0;
}
                `
          },
          {
            tag: "top, right, bottom, left",
            description: "Deslocamento relativo",
            topics: "Propriedades de Layout",
            example: `
            .fixo {
  position: fixed;
  bottom: 0;
  right: 0;
}
                `
          },
          {
            tag: "float, clear",
            description: "Controle de fluxo.",
            topics: "Propriedades de Layout",
            example: `
            .imagem {
  float: left;
}

  .clear {
  clear: both;
}
                `
          },
          {
            tag: "margin",
            description: "Espaço externo",
            topics: "Box Model",
            example: `
            .box {
  margin: 20px;
}
                `
          },
          {
            tag: "padding",
            description: "Espaço interno",
            topics: "Box Model",
            example: `
            .box {
  padding: 10px;
}
                `
          },
          {
            tag: "border",
            description: "Borda",
            topics: "Box Model",
            example: `
            .box {
  border: 1px solid #000;
}
                `
          },
          {
            tag: "width, height",
            description: "Tamanho",
            topics: "Box Model",
            example: `
            .box {
  width: 200px;
  height: 100px;
}
                `
          },
          {
            tag: "background-color",
            description: "Cor de fundo",
            topics: "Background",
            example: `
            body {
  background-color: #f0f0f0;
}
                `
          },
          {
            tag: "background-image",
            description: "Imagem de fundo",
            topics: "Background",
            example: `
            .hero {
  background-image: url('banner.jpg');
}
                `
          },
          {
            tag: "background-size",
            description: "Tamanho da imagem de fundo",
            topics: "Background",
            example: `
            .hero {
  background-size: cover;
}
                `
          },
          {
            tag: "background-repeat",
            description: "Repetição da imagem de fundo",
            topics: "Background",
            example: `
            .pattern {
  background-repeat: repeat-x;
}
                `
          },
          {
            tag: "display flex",
            description: "flex e propriedades relacionadas como justify-content.",
            topics: "Flexbox e Grid",
            example: `
            .container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
                `
          },
          {
            tag: "display grid",
            description: "grid com grid-template-columns.",
            topics: "Flexbox e Grid",
            example: `
            .grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
}	
                `
          },
        ],
      },
  
      devops: {
        title: "Administração do sistema",
        topics: [
          "GHPages",
          "PM2",
          "Docker",
          "Dockerfile"
        ],
        content: [
            {
              tag: "Deploy",
              description: `
                Para realizar o deploy básico no GitHub Pages:
          
                1. Crie um repositório no GitHub com o nome \`seu-usuario.github.io\`.
                2. Crie um arquivo \`index.html\` na raiz do repositório.
                3. Acesse \`https://seu-usuario.github.io\` para visualizar o conteúdo do arquivo.
              `,
              topics: "GHPages",
            },
          {
            tag: "1. Gerenciamento de Processos Node.js",
            description: "npm install pm2 -g",
            topics: "PM2",
          },
          {
            tag: "2. Iniciar um processo pm2",
            description: "pm2 start app.js",
            topics: "PM2",
          },
          {
            tag: "3. Listar processos pm2",
            description: "pm2 list",
            topics: "PM2",
          },
          {
            tag: "4. Parar processos pm2",
            description: "pm2 stop app",
            topics: "PM2",
          },
          {
            tag: "5. Reiniciar um processo pm2",
            description: "pm2 restart app",
            topics: "PM2",
          },
          {
            tag: "1. Instalação",
            description: "https://docs.docker.com/get-docker/",
            topics: "Docker",
          },
          {
            tag: "2. Criar um container",
            description: "docker run -d -p 80:80 --name webserver nginx",
            topics: "Docker",
          },
          {
            tag: "3. Listar containers",
            description: "docker ps",
            topics: "Docker",
          },
          {
            tag: "4. Parar container",
            description: "docker stop webserver",
            topics: "Docker",
          },
          {
            tag: "5. Inciar container",
            description: "docker start webserver",
            topics: "Docker",
          },
          {
            tag: "6. Remover um container",
            description: "docker rm webserver",
            topics: "Docker",
          },
          {
            tag: "7. Remover uma imagem",
            description: "docker rmi nginx",
            topics: "Docker",
          },
          {
            tag: "Criar uma imagem",
            description: `
              Para criar uma imagem Docker com Node.js, utilize o seguinte Dockerfile:
        
              \`\`\`dockerfile
              FROM node:14
        
              WORKDIR /app
        
              COPY package*.json ./
        
              RUN npm install
        
              COPY . .
        
              EXPOSE 3000
        
              CMD [ "node", "app.js" ]
              \`\`\`
        
              Esse Dockerfile cria um ambiente de contêiner baseado na imagem oficial do Node.js, instala as dependências e executa o arquivo \`app.js\` na porta 3000.
            `,
            topics: "Dockerfile",
          },
          {
            tag: "Benefícios da Containerização:",
            description: `
              - **Consistência entre ambientes de desenvolvimento e produção**: Garantia de que o código rodará da mesma maneira em diferentes ambientes.
              - **Isolamento de aplicações**: Cada aplicação roda em seu próprio contêiner, sem interferir em outras.
              - **Escalabilidade facilitada**: Facilidade em escalar aplicações horizontalmente, distribuindo contêineres conforme necessário.
            `,
            topics: "Dockerfile",
          },
          {
            tag: "Docker Compose",
            description: `
              Para configurar um ambiente com Docker Compose, você pode usar o seguinte arquivo \`docker-compose.yml\`:
        
              \`\`\`yaml
              version: '3'
              services:
                web:
                  build: .
                  ports:
                    - "3000:3000"
                db:
                  image: mongo
                  ports:
                    - "27017:27017"
              \`\`\`
        
              Esse arquivo define dois serviços:
              - **web**: A aplicação é construída a partir do Dockerfile na raiz do projeto e mapeia a porta 3000.
              - **db**: Um contêiner MongoDB é iniciado, mapeando a porta 27017.
            `,
            topics: "Docker Compose",
          },
          {
            tag: "Comandos Docker Compose:",
            description: `
              - **docker-compose up**: Inicia os serviços definidos no arquivo \`docker-compose.yml\`.
              - **docker-compose down**: Para e remove os contêineres.
              - **docker-compose logs**: Exibe os logs dos serviços.
              - **docker-compose exec web bash**: Acessa o terminal do contêiner \`web\`.
            `,
            topics: "Docker Compose",
          }
        ],
      },
      node: {
        title: "Node.js no Backend",
        topics: [
          "Módulos",
          "Express.js",
          "MongoDB com Mongoose"
        ],
        content: [
            {
                tag: "http, fs, path",
                description: "Para criação de servidor e manipulação de arquivos",
                topics: "Módulos",
                example: `
                const http = require('http');
const server = http.createServer((req, res) => res.end('Hello'));
server.listen(3000);
                    `
              },
          {
            tag: "Rotas e Middlewares",
            description: "Exemplo de rota com Express.js",
            topics: "Express.js",
            example: `
            const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Olá!'));
            `
          },
          {
            tag: "MongoDB com Mongoose",
            description: "1. Conectar e definir Schema",
            topics: "MongoDB com Mongoose",
            example: `
            const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);
`
          },
        ],
      },
      react: {
        title: "React no Frontend",
        topics: [
          "Estrutura de Componentes",
          "Hooks",
          "React Router"
        ],
        content: [
          {
            tag: "Estrutura de Componentes",
            description: "Componente funcional",
            topics: "Estrutura de Componentes",
            example: `
            import React from 'react';

            function Saudacao(props) {
const App = () => <h1>Olá!</h1>;
}

export default Saudacao;
`
          },
          {
            tag: "Estrutura de Componentes",
            description: "Uso do Componente",
            topics: "Estrutura de Componentes",
            example: `
            import React from 'react';
import Saudacao from './Saudacao';

function App() {
  return (
    <div>
      <Saudacao nome="Maria" />
      <Saudacao nome="João" />
    </div>
  );
}

export default App;
`
          },
          {
            tag: "useState e useEffect",
            description: "Para manipulação de estado e efeitos colaterais",
            topics: "Hooks",
            example: `
              // Exemplo de uso de useState e useEffect no React
              import React, { useState, useEffect } from 'react';
          
              function Contador() {
                // Definindo o estado 'count' com o valor inicial 0
                const [count, setCount] = useState(0);
          
                // Efeito que altera o título da página com o valor de 'count'
                useEffect(() => {
                  document.title = \`Você clicou \${count} vezes\`;
                }, [count]);  // O efeito é executado sempre que 'count' mudar
          
                return (
                  <div>
                    {/* Exibindo o número de vezes que o botão foi clicado */}
                    <p>Você clicou {count} vezes</p>
                    {/* Botão para incrementar o 'count' */}
                    <button onClick={() => setCount(count + 1)}>
                      Clique aqui
                    </button>
                  </div>
                );
              }
          
              export default Contador;
            `
          },
          {
            tag: "React Router",
            description: "Para navegação entre páginas",
            topics: "React Router",
            example: `
               import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
            `
          }
        ],
      },
      html: {
        title: "HTML - Marcação de texto",
        topics: [
          "Estruturais",
          "Textuais",
          "Mídias",
          "Formulários",
          "Tabelas",
          "Semânticas",
        ],
        content: [
            {
              tag: "<html>",
              description: "Elemento raiz de um documento HTML. Contém todos os outros elementos.",
              topics: "Estruturais",
              example: `
                <html lang="en">
    <head></head>
    <body></body>
</html>
              `
            },
          {
            tag: "<head>",
            description: "Elemento que contém informações sobre o documento. Tais informações incluem o título da página, scripts, estilos, metadados, etc.",
            topics: "Estruturais",
            example: `
              <head>
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
            `
          },
          {
            tag: "<body>",
            description: "Elemento que contém o conteúdo do documento. Pode conter parágrafos, imagens, links, tabelas, formulários, etc.",
            topics: "Estuturais",
            example: `
             <body>
    <h1>Heading</h1>
    <p>Paragraph</p>    
</body>
            `
          },
          {
            tag: "<div>",
            description: "Elemento de divisão que agrupa elementos em um documento HTML. É usado para criar seções ou grupos de elementos.",
            topics: "Estuturais",
            example: `
            <div>
    <h1>Heading</h1>
    <p>Paragraph</p>
    <div>
        <h2>Subheading</h2>
        <p>Subparagraph</p>
    </div>
</div>
                `
          },
          {
            tag: "<span>",
            description: "Elemento de marcação de texto genérico. É usado para agrupar elementos de texto em um documento HTML.",
            topics: "Estuturais",
            example: `
            <p>This is a <span>span</span> element.</p>
                `
          },
          {
            tag: "<h1> to <h6>",
            description: "Elementos de cabeçalho que representam seis níveis de cabeçalhos de seção. <h1> é o mais importante e <h6> é o menos importante.",
            topics: "Textuais",
            example: `
            <h1>Heading 1</h1> 
<h2>Heading 2</h2>
                `
          },
          {
            tag: "<p>",
            description: "Elemento de parágrafo que define um parágrafo de texto.",
            topics: "Textuais",
            example: `
            <p>This is a paragraph.</p>
                `
          },
          {
            tag: "<a>",
            description: "Elemento de âncora que cria um link para outra página ou recurso.",
            topics: "Textuais",
            example: `
            <a href="https://www.example.com">Link</a>
                `
          },
          {
            tag: "<strong>",
            description: "Elemento de texto que define um texto importante ou enfatizado.",
            topics: "Textuais",
            example: `
            <p>This is <strong>important</strong> text.</p>
                `
          },
          {
            tag: "<em>",
            description: "Elemento de texto que define um texto enfatizado.",
            topics: "Textuais",
            example: `
            <p>This is <em>emphasized</em> text.</p>
                `
          },
          {
            tag: "<img>",
            description: "Elemento de imagem que exibe uma imagem em um documento HTML.",
            topics: "Mídias",
            example: `
            <img src="image.jpg" alt="Image">
                `
          },
          {
            tag: "<audio>",
            description: " Elemento de áudio que incorpora conteúdo de áudio em um documento HTML.",
            topics: "Mídias",
            example: `
            <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
                `
          },
          {
            tag: "<video>",
            description: "Elemento de vídeo que incorpora conteúdo de vídeo em um documento HTML.",
            topics: "Mídias",
            example: `
            <video controls>
    <source src="video.mp4" type="video/mp4">
</video>
                `
          },
          {
            tag: "<form>",
            description: "Elemento de formulário que contém elementos de entrada, como campos de texto, botões, caixas de seleção, etc.",
            topics: "Formulários",
            example: `
            <form action="/submit" method="POST"></form>
                `
          },
          {
            tag: "<input>",
            description: "Elemento de entrada que permite ao usuário inserir dados em um formulário.",
            topics: "Formulários",
            example: `
            <input type="text" name="username">

                `
          },
          {
            tag: "<textarea>",
            description: "Elemento de área de texto que permite ao usuário inserir texto em um formulário.",
            topics: "Formulários",
            example: `
            <textarea name="message"></textarea>
                `
          },
          {
            tag: "<button>",
            description: "Elemento de botão que pode ser clicado pelo usuário para enviar um formulário.",
            topics: "Formulários",
            example: `
            <button type="submit">Submit</button>
                `
          },
          {
            tag: "<select>",
            description: "Elemento de seleção que cria uma lista suspensa de opções para o usuário escolher.",
            topics: "Formulários",
            example: `
            <select name="color">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
</select>
                `
          },
          {
            tag: "<table>",
            description: "Elemento de tabela que define uma tabela de dados.",
            topics: "Tabelas",
            example: `
            <table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
                `
          },
          {
            tag: "<header>",
            description: "Cabeçalho de uma seção ou página.",
            topics: "Semânticas"
          },
          {
            tag: "<footer>",
            description: "Rodapé de uma seção ou página.",
            topics: "Semânticas"
          },
          {
            tag: "<article>",
            description: "Artigo independente que faz sentido por si só.",
            topics: "Semânticas"
          },
          {
            tag: "<section>",
            description: "Seção de um documento.",
            topics: "Semânticas"
          },
          {
            tag: "<nav>",
            description: "Navegação do documento.",
            topics: "Semânticas"
          },
        ],
      },
    };
   
    const assuntoContent = listaContent[assunto];
   
    if (!assuntoContent) {
      console.log('Assunto ${assunto} não encontrado');
      return [];
    }
   
    return assuntoContent;
  }