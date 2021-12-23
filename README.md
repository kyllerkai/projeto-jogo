<h1 align="center">
    <strong>Fã-animation 💜</strong>
</h1>

<p align="center">
    <img src="https://th.bing.com/th/id/R62e7292d0215473ec0c77bb5d816af0d?rik=uC%2buD0ydubbGbw&pid=ImgRaw" alt="Eu Ajudo" width="400"/>
</p>
<p align="center"><b>Fã-animation</b> | Onde cada anime ganha vida em seus corações! 💜</p>

# 📖 **Sobre**
A Fã-animation é um serviço de transmissão online feito por fãs para fãs <br/>
(como próprio nome diz), que oferece uma ampla variedade de: séries animadas

<br/>

## **💻 Tecnologias e Dependência**

Esse projeto foi feito utilizando as seguintes tecnologias:

- **[React.js](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)**

- **[React-helmet](https://www.npmjs.com/package/react-helmet)**

- **[Chakra-ui](https://chakra-ui.com/)**

- **[Sass](https://sass-lang.com/)**

- **[Styled-Components](https://styled-components.com/)**


# 🚀 **Como rodar?**
<!--ts-->
 **Pré-requisitos** 
 
<blockquote>

- É necessário possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador (recomendado a versão LTS).

- Também, é preciso ter um gerenciador de pacotes seja o **NPM** (o npm e npx já vem por padão ao instalar o node.js) ou **[Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable)**.

- É necessário possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  
</blockquote>

<br/>


**1° Faça um clone do repositório:**
```bash
 git clone https://github.com/KayoRonald/fa-animation.git
```

**2. Executando a Aplicação:**

No diretório no projeto, você pode executar:
```bash
  cd fa-animation 
```

**3. Como instalar as dependências**

Caso você queira, podera ser usado o yarn ou npm. 

```bash
yarn 
```

```bash
npm install
```

**4. Como rodar o projeto**
```bash
yarn start
```
 ou
```bash
npm start
```

```bash
  # Para cada alteração feita na aplicação, é necessário fazer estes comandos:
  git add .
  git commit -m "minha alteração"
  git push -u origin main
```
<br/>

# 🗄️**Firebase**

 - Acesse o site do **[Firebase](https://firebase.google.com/)**, faça o registro do seu app.

```js
import firebase from 'firebase/app';
import 'firebase/auth';

//Coloque seus dados do firebase em um arquivo .env

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
});

export const auth = app.auth();
export default app;

```
Crie um arquivo .env na raiz do seu projeto.

```env
# firebase
REACT_APP_APIKEY= ""
REACT_APP_AUTHDOMAIN= ""
REACT_APP_DATABASEURL= ""
REACT_APP_PROJECTID= ""
REACT_APP_STORAGEBUCKET= ""
REACT_APP_MESSAGINGSENDERID= ""
REACT_APP_APPID= ""
````
<h4 align="center">
    <b>Este projeto foi inicializado com o aplicativo <a  href="https://github.com/facebook/create-react-app">Create React App</a>.</b>
</h4>
