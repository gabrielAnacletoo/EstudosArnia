##para instalar 
npm install express typescript @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-env @babel/cli nodemon --save-dev

##configurar ts
npx tsc --init


#pesquisar coverage


##também é necessario instalar 
npm i ts-node

Configuração do Babel: Crie um arquivo de configuração do Babel chamado .babelrc na raiz do seu projeto com o seguinte conteúdo:

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
}

npm i --save-dev @types/express
instala o types do express


"scripts": {
    "start": "nodemon --exec babel-node src/index.ts",
    "build": "npx buidl"
  },


  OBS: se criar um arquivo no vscode com nome / e nome/ ele vai criando pastas
  dentro de pastas