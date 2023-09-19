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

  instalar projeto com TYPESCRIPT
  npm i typescript tsx dotenv tsup vitest -D
  depois
  npx tsc --init 
  npm run build declara o tsup como build
  ir no package json e adicionar 
  "start:dev": "tsx src/index.ts",
  "start": "node dist/index.js"
  "build": "tsup src",
  "test": ""


Para configurar o TypeScript e o Babel em uma API Node.js, você pode seguir os seguintes passos:

1. Inicialize o projeto Node.js:
   Crie uma nova pasta para o projeto e, em seguida, abra o terminal e execute o seguinte comando para iniciar um novo projeto Node.js:

   ```bash
   npm init -y
   ```

2. Instale as dependências:
   Execute o seguinte comando no terminal para instalar as dependências necessárias:

   ```bash
   npm install typescript tsx tsup
   ```

3. Configuração do TypeScript:
   Crie um arquivo de configuração do TypeScript utilizando o comando ```npx tsx --init```, com isso deve criar um arquivo como:

   ```json
   {
     "compilerOptions": {
       "target": "es2018",
       "module": "commonjs",
       "outDir": "dist",
       "strict": true,
       "esModuleInterop": true
     },
     "include": ["src"],
     "exclude": ["node_modules"]
   }
   ```

4. Configuração dos scripts:
   Adicione os scripts no arquivo ```package.json```:

   ```json
   {
     "scripts": {
         "start": "tsx src/index.ts",
         "start:dev": "tsx watch src/index.ts",
         "build": "tsup src",
         "test": "vitest"
      },
   }
   ```