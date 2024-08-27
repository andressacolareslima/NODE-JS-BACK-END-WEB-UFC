<div align="center">
<img src="logo (2).png" alt="logo.png" width="300">
</div>

<h5 align="center">Desenvolvimento Web 2024.2 - Back-end com Node.js</h5>

> Grupo: Andressa Colares | Matrícula: 471151

## Sobre o projeto 🚀
Neste projeto, foi desenvolvido uma API REST com CRUDS básicos (GET, DELETE, PUSH E POST), simulando uma pokedex, os CRUDS desenvolvidos foram:
> GET |
> GET por ID |
> POST |
> PUSH por ID|
> DELETE por ID
- Um Pokémon tem os atributos: Nome, Número, Tipo e a Imagem. Todos os tipos de
Pokémon devem estar armazenados em um ENUM na sua aplicação. Para o atributo
imagem, pode-se armazenar a URL da imagem.
o [neste link](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1)

## Organização das pastas 📋

- Main
> Readme.md |
> package-lock.json |
> package.json

- Master 
> Models.js (contendo o arquivo Pokemons.js) |
> Arquivo db.js |
> Arquivo servidor.js

## Clonar respositório 📎

- Para clonar usando URL do repositório :
``https://github.com/andressacolareslima/NODE-JS-BACK-END-WEB-UFC.git``

- Utilizando SSH
``git@github.com:andressacolareslima/NODE-JS-BACK-END-WEB-UFC.git``

- Utilizando GitHub CLI
``gh repo clone andressacolareslima/NODE-JS-BACK-END-WEB-UFC``

## Testar a aplicação 💻
Para testar essa aplicação, é necessário ter o Node.js instalado em sua máquina, como também o Postman para testar os CRUDS e MongoDB para o código de conexão ao DataBase funcione de forma correta.
Após esses passos concluídos, em seu terminal (para Linux ou Windows) ou no próprio terminal do VS Code, digite o comando ``npm install`` para instalar as dependencias. Após, digite o comando ``npm run dev`` para abrir o servidor.
Pronto,agora utilize plataformas como o ``Postman`` ou similar para testar as rotas :sunglasses:
Se o código estiver correto, os dizeres ``Servidor conectado na porta 3330`` e ``Conectado ao MongoDB`` aparecerão em sua tela. 
