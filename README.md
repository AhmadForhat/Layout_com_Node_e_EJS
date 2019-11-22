# Construção de Layout com Node e EJS
## Objetivo
> Neste projeto foi realizado a prova de um conceito de um site iterativo e responsivo em EJS, CSS e JavaScript com o intuito de demonstrar algumas tecnicas de Front-end.
## Como Rodar no Computador
> Clone os arquivos no seu computador utilizando os comandos abaixo:
```
git clone "https://github.com/AhmadForhat/TesteReadMe#constru%C3%A7%C3%A3o-do-layout-em-node-e-ejs"
cd node-e-ejs
```
> Para instalar os arquivos necessários para o funcionamento adequado do node, utilize os comandos abaixo em seu bash:
```
$ npm install
$ node app.js
```
> Primeiro comando ira instalar as dependências utilizadas no projeto e o segundo comando ira inicializar a aplicação no servido local 3000, para vizualizar o projeto digite no browser: http://localhost:3000/.
## Explicações sobre a construção e Códigos

### Construção do ambiente em node
> Para criar o ambiente node foi criado um arquivo com o nome de app.js e iniciação a aplicação node no bash conforme abaixo:
```
$ mkdir Node_e_EJS
$ cd Node_e_EJS
$ npm init -y
$ npm install express --save
$ npm install path --save
$ npm install ejs --save
$ npm install -g nodemon 
```
> Resumidamente o código acima cria uma pasta, entra na pasta criada, inicia um ambiente node e instala as dependências que vamos utilizar.

> Criação das requisições em node para o funcionamento do sistema:
```
// Criação das variáveis para o sistema
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Requisições HTTP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Requisição da pasta com os arquivos CSS e JavaScript
app.use(express.static(path.join(__dirname, 'public')));

// Requisição do arquivo EJS
app.get('/', function(req, res, next) {
    res.render('index', {
        title: "Teste Express",
        version: "0.0.0",
        dev: "Ahmad Forhat",
    });
});

// Local onde o sistema vai ser ouvido
app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});

```
> O documento acima permite que seja possível termos um site dinâmico e automatizado.

### Construção do EJS
> Comandos utilizados para criar o ambiente de trabalho EJS
```
$ mkdir views
$ cd views
$ touch index.ejs
```
> Dentro da pasta foi aberto o arquivo no editor de texto onde foi escrito o código parecido com HTML para trazer as informações visuais do site. É importante fazer um teste do seu arquivo nessa etapa para ver o funcionamento correto.

#### Hello World EJS

> Utilização do bash:
```
$ nodemon app.js
```
> lembre de realizar essa função na pasta onde o arquivo app.js está, se fizer em outro local não funcionara.
> Estrutura básica arquivo EJS + Hello World:
```
<!DOCTYPE html>
<html>
  <head>
    <title><Primeiro Teste com Ejs></title>
    <link rel="stylesheet" type="text/css" href="/styles/main.css" />
    <script type="text/javascript" src="/script.js" defer></script>
  </head>
  <body>
    <main>
      <h1>Hello World!!</h1>
      <nav>
      </nav>
    </main>
    <footer>
    </footer>
  </body>
</html>
```
> Abra no browser no endereço http://localhost:3000/, também é importante testar o arquivo EJS, para isso podemos utilizar o código abaixo:

```
<!DOCTYPE html>
<html>
  <head>
    <title><Primeiro Teste com Ejs></title>
    <link rel="stylesheet" type="text/css" href="/styles/main.css" />
    <script type="text/javascript" src="/script.js" defer></script>
  </head>
  <body>
    <main>
      <h1><%= title %></h1>
      <nav>
      </nav>
    </main>
    <footer>
    </footer>
  </body>
</html>
```

> title no h1 está definido no nosso arquivo app.js com essa função podemos chamar a atribuição feita no arquivo JavaScript para o arquivo EJS, essa função é importante para diversas aplicações, para mais informações sobre as nomenclaturas é recomendado entrar na documentação [https://ejs.co/].

### Construção dos arquivos CSS e JS

> Esses dois arquivos foram criados em uma pasta public onde foi determinado que nossos arquivos statics ficariam, conforme o código abaixo:

```
$ mkdir public
$ cd public
$ touch script.js
$ mkdir styles
$ cd styles
$ touch main.css

```

> Por último foi chamado os arquivos CSS e JavaScript para o arquivo EJS assim tendo as propriedades linkadas e sendo possível trabalhar normalmente com esses arquivos, abaixo é possível verificar o resultado final do arquivo EJS:

```
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <!-- link com o arquivo css-->
    <link rel="stylesheet" type="text/css" href="/styles/main.css" />
    <!-- link com o arquivo JavaScript estático -->
    <script type="text/javascript" src="/script.js" defer></script>
  </head>
  <body>
    <main>
        <h1><%= title %></h1>
      <nav>
      </nav>
    </main>
    <footer>
        <p>Desenvolvedor <%= dev %></p>
    </footer>
  </body>
</html>

```

> O resto dos códigos foram realizados com os conhecimentos básico de HTML, CSS e JavaScript para deixar o site mais interativo e responsivo.
