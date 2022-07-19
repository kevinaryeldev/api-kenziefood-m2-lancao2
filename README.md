

# API-KenzieFood

Este projeto foi apresentado durante a conclusão do 2º modulo da kenzie academy brasil. foi uma atividade em grupo para construir uma aplicação que consumisse uma api. o design foi enviado pronto para nós e pode ser acessado <a href="https://www.figma.com/file/yCesx2slm3unVtyVW5d3RK/M2---E-commerce-Produtos---Kenzie-Food">aqui </a>
Um grupo de 4 pessoas teve 4 dias (1 para planejamento) para construir a aplicação. Abaixo a descrição da atividade e após a descrição da api

##Entrega: Projeto Capstone

Como já foi informado, você e sua equipe irão desenvolver um projeto durante essa semana. Esperamos ver alguns conceitos principais sendo colocados em prática, no desenvolvimento do projeto. Esses conceitos são:

###Principais conceitos
OOP:
Sintaxe de classe;
classes estáticas.
Spread Operator;
Desconstrução;
LocalStorage;
Consumo de API.


###Requisitos técnicos/funcionalidades
Implementar requisições:
Autenticação por meio do register e login
Consumo, Criação, Edição e Remoção
Extra: Uso dos endpoints 'cart', para manipulação do carrinho via API

####Utilizar o DOM para construir o template de produtos. Cada card de produto deve conter:

Nome;
Foto;
Descrição;
Categoria(deve conter o ícone);
Preço.

####Também deve ser possível filtrar os produtos:

Por categoria;
Por campo de busca:
Não deve diferenciar letras maiúsculas/minúsculas;
A busca deve ser realizada no momento da digitação, ou seja, a lista de produtos deve ser atualizada conforme o usuário digitar as opções no campo.

####Carrinho:
Deve ser possível adicionar produtos ao carrinho.
Deve ser possível remover produtos do carrinho.
Atualizar o preço total do carrinho, baseado nos produtos do carrinho.
Atualizar a quantidade total de produtos no carrinho.


###Layout - Kenzie Food
Você e sua equipe deverão seguir o layout proposto.


###Requisitos
Aplicar mobile first;
Seguir fielmente o layout do figma;

####Criação da página de login e register feita pela equipe deve ser uma ideia da equipe, seguindo o esquema de cores do figma;

LocalStorage (Vocês podem implementar, no carrinho, para salvar os produtos adicionados pelo usuário e para salvar o token de acesso).

API
Será obrigatório apenas a implementação das requisições referentes aos produtos e autenticação. As requisições referentes ao carrinho são extras.

###Trabalhando com a API e o Front

Na aplicação, deve ser possível fazer o register e o login de um usuário. Porém, caso o mesmo não queira se cadastrar, ele tem liberdade para navegar na página, usando a requisição pública de produtos padrões. Assim, os produtos que forem adicionados no carrinho, por esse usuário anônimo, devem se manter apenas no LocalStorage.

###Resumo do acesso de usuário autenticado e usuário anônimo.

####Anônimo

Entrada permitida na página Home;
Uso apenas da requisição pública de produtos;
Produtos adicionados devem ficar apenas no localStorage;
Acesso bloqueado a página de criação, edição e remoção de produtos.

####Autenticado

Entrada Permitida na página home;
Listagem de produtos feita pela requisição privada do usuário;
Produtos Adicionados ao carrinho inicialmente no localStorage, caso efetue o extra, adicionar na API;
Acesso total a página de criação, edição e remoção de produtos.
Aviso!
Criem apenas um único usuário, por equipe. Todos os integrantes devem usar o mesmo usuário!

###Páginas

####Home Page
Página Inicial de produtos: local onde será possível acessar a lista de produtos e o carrinho.

Nesse local será possível ser redirecionado para a página de login/register e, caso o usuário esteja autenticado, também será possível ser redirecionado a página de admin.

####Admin Page
Página, na qual só será acessada por usuários autenticados, onde serão consumidas as requisições privadas da API para os produtos (GET, POST, PATCH, DELETE)

Será possível ver todos os produtos do usuário porém, ao tentar deletar o mesmo, deverá aparecer um pop-up confirmando a remoção.

####Login/Register
Páginas responsáveis por cadastrar um novo usuário e fazer a autenticação do mesmo.

Extras
Extras estão focados nas requisições do carrinho, referente ao usuário autenticado.

2 pts à cada requisição extra implementada. (POST, PATCH E DELETE) Referente ao carrinho de um usuário autenticado.

###Iniciando desenvolvimento:

Para iniciar, acesse o link e clone o repositório. Todos irão trabalhar no mesmo repositório. Então, apenas o líder irá clonar e irá adicionar o restante do grupo como membros do projeto.

Aviso!
Durante o desenvolvimento, o repositório deve permanecer internal. Após as apresentações, poderá ficar público e compartilhar nas redes sociais.



##API

Nesse trabalho vocês terão que consumir uma API de produtos.

## Rotas

### Get `/product`

### Resposta: Status 200

```json

```
---

### Get `/product/:id`

### Regras:
Passar id do produto específico na url.


### Resposta: Status 200

```json
{
	"id": 5,
	"nome": "Panqueca de banana com aveia",
	"preco": 20,
	"categoria": "Panificadora",
	"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
	"createdAt": "2022-01-24T13:20:24.211Z",
	"updatedAt": "2022-01-24T13:20:24.211Z"
}

```
--- 
## Rotas extras
Em todas as rotas extras são autenticadas, por isso, é necessário enviar no header o token da sua respectiva equipe. Exemplo:

```javascript
fetch("https:urlDaApi", { headers : {Authorization: "Bearer tokenDaSuaEquipe"}} )
```
---

### Get `/my/product`
### Regras:
Essa rota retorna todos os produtos que foram criados utilizando o token de sua equipe. Exemplo?

### Resposta: Status 200
```json
[
	{
		"id": 3,
		"nome": "Bolinho",
		"preco": 5,
		"categoria": "Doce",
		"imagem": "https://picsum.photos/200/300",
		"createdAt": "2022-01-24T14:29:37.680Z",
		"updatedAt": "2022-01-24T14:29:37.680Z"
	},
	{
		"id": 4,
		"nome": "Temaki",
		"preco": 5,
		"categoria": "Comida Japonesa",
		"imagem": "https://picsum.photos/200/300",
		"createdAt": "2022-01-24T14:36:34.045Z",
		"updatedAt": "2022-01-24T14:41:38.740Z"
	}
]
```
---

### Get `/my/product/:id`
### Regras:
Passar id do produto específico na url.
### Resposta: Status 200
```json
{
	"id": 3,
	"nome": "Bolinho",
	"preco": 5,
	"categoria": "Doce",
	"imagem": "https://picsum.photos/200/300",
	"createdAt": "2022-01-24T14:29:37.680Z",
	"updatedAt": "2022-01-24T14:29:37.680Z"
}
```
---

### Post `/my/product`
### Regras:
- `nome` e `categoria`: precisam ser strings.
- `preco`: deve ser um número positivo.
- `imagem`: deve ser a url de alguma imagem.

```json
{
	"nome": "Bolinho",
	"preco": 5,
	"categoria": "Doce",
	"imagem": "https://picsum.photos/200/300"
}
```
### Resposta: Status 201 Created
```json
{
	"id": 4,
	"user_id": 2,
	"nome": "Bolinho",
	"preco": 5,
	"categoria": "Doce",
	"imagem": "https://picsum.photos/200/300",
	"ip_user": "143.208.126.11",
	"updatedAt": "2022-01-24T14:36:34.045Z",
	"createdAt": "2022-01-24T14:36:34.045Z"
}
```
---

### Patch `/my/product/:id`
### Regras:
- `nome` e `categoria`: precisam ser strings.
- `preco`: deve ser um número positivo.
- `imagem`: deve ser a url de alguma imagem.
- Passar id do produto específico na url.

### Requisição:
Enviar um JSON com pelo menos uma das informações do produto a ser alterada, exemplo:

```json
{
	"nome" : "Temaki"
}
```

### Resposta: Status 202 Accepted
```json
{
	"id": 4,
	"nome": "Temaki",
	"preco": 5,
	"categoria": "Doce",
	"imagem": "https://picsum.photos/200/300",
	"createdAt": "2022-01-24T13:51:16.525Z",
	"updatedAt": "2022-01-24T14:30:20.104Z"
}
```
---

### Delete `/my/product/:id`
### Regras:
Passar id do produto específico na url.
Essa rota não precisa de um body, apenas do id na url.
### Resposta: Status 204 No Content

