# Este primeiro desafio é uma introdução ao React.JS, o que você vai conseguir fazer depois desse desadfio

  - Iniciar um projeto React usando package create-react-app
  - Entender a estrutura de um projeto criado pelo create-react-app
  - Interagir com o component em React

## Primeiro Criar um projeto

  - verifique se você tem instalado o Node em sua máquina
```
   $ node --version
   $ npm --versio
```

  - No Windows open terminal (cmd, gitbash, powershellcd):
    use cmd <tecla super digite cmd>
    use gitbash <tecla super digite bash>

- No Linux  CRTL + ALT + T , geralmente é o atallho para abrir o terminal
-No MacOs use Launchpad para abrir o terminal

Vamos fazer uso no npx
> 
npx é uma ferramenta destinada a ajudar a aprimorar a experiência de uso de pacotes do registro npm - da mesma forma que o npm torna super fácil instalar e gerenciar dependências hospedadas no registro, o npx torna mais fácil usar as ferramentas CLI e outros executáveis ​​hospedados no o registro. 11 de jul. de 2017 ==> [npm_blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner#:~:text=npx%20is%20a%20tool%20intended,executables%20hosted%20on%20the%20registry. "npm_blog")

Não se preocupe se demorar um pouco para criar o projeto a depender da capacidade de processamento ou serviços rodando em background esse processo pode demorar um  pouco.cd 

```
	$ npx create-react-app my-app
	$ cd my-app
	$ npm start
```

* lembre-se de nomear o projeto com letras minúsculas e se houve necessidade de espaço em um nome composto use undescore ou hífen, nenhum caracter especial é permitido.*

> crie uma pasta separada afim de organizar seus arquivos


------------

## Abrir o projeto
Depois do comando  
`$:  cd my_app`
digite 
`$: code .`
> não se equeça do ponto, ele indica que vc deseja abrir o Vs-Code no diretorio corrente
se não abrir com esse comando abra o VS-Code e naveguea até a pasta em monento oporturno inclua VS-Code no seu path.


## Navege pelas pastas
Não se preocupe com a estrutura das pastas nos próximos desafios vamos entender para que servem cada uma das pastas contidas no projeto
Mas para não ficar preocupado esta estrutura nos dará a melhor organização e em futuros projetos vamos acrescentar mais pastas simplemente para indicar a responsabilidade de cada arquivo dentro de determinada pasta.

## Vamos para "mão-na-massa"
Se vocẽ executou o comando `npm start` no seu browser deve estar em tela o site react com o logo react e logo abaixo um link "Learn React"
Deixe o site aberto e vá até o arquivo App.js dentro do diretorio */src*****
o codigo que você verá será este aqui;
```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
apague todo o codigo que está entre a primeira `<div></div>`
o codigo então ficará assim: 
```javascript
function App() {
  return (
    <div className="App">
    
    </div>
  );
}
```
apague o logo, não vamos usa-ló
`import logo from './logo.svg';`
entre as tag div escreva seu primeiro código no React
 `<h1>Hello World</h1>`
 
 ## Agora vem seu desafio
 Não se assuste, nossa proposta é que vc aprenda apanhando, opâ, quero dizer fazendo, abaixo você tem a imagem da pagina que vc deverá criar.

[![challenge-1](https://i.imgur.com/PQ7M9rI.png "challenge-1")](https://i.imgur.com/PQ7M9rI.png "challenge-1")

### Como vou fazer isso?
Eu sei que você deve ter reparado que temos um arquivo App.js e outro App.css e já sabe que neste arquivo .css estão as configurações que você irá modificar para obter o resultado do desafio.
No arquivo App.css pode apagar todo o conteúdo depois de .App, deixando somente o código que segue abaixo: 
```javascript
.App {
  text-align: center;
  width: 100vw;
  height: 100vh;
}
```
> dica: eu estabeleci o tamanho como toda a tela no eixo x e y, e usei flex, mas existem  outras formas de fazer.
> busque na internte um item de cada vez, por exemplo:
> *como posicionar texto centro da pagina?*
Boa sorte, estou certo de que você irá consegui
Te vejo no próximo desafio.