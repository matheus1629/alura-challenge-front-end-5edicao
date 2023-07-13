// Importar as dependências
const jsonServer = require('json-server')
const fs = require('fs')

// Criar o servidor
const server = jsonServer.create()

// Ler o arquivo db.json
const dbFile = fs.readFileSync('db.json')
const db = JSON.parse(dbFile)

// Definir as rotas personalizadas
const router = jsonServer.router('db.json')
const routes = JSON.parse(fs.readFileSync('routes.json'))

// Definir o middleware para a rota /login
server.post('/login', (req, res, next) => {
  // Obter o email e a senha do corpo da requisição
  const { email, password } = req.body

  // Procurar um usuário que tenha o mesmo email e senha no banco de dados
  const user = db.users.find(u => u.email === email && u.password === password)

  if (user) {
    // Se encontrar, retornar o usuário como um objeto JSON
    res.jsonp(user)
  } else {
    // Se não encontrar, retornar um erro 404
    res.status(404).jsonp({
      error: "Email ou senha inválido"
    })
  }
})

// Usar as rotas personalizadas
server.use(jsonServer.rewriter(routes))

// Usar o router padrão do json-server
server.use(router)

// Iniciar o servidor na porta 5000
server.listen(5000, () => {
  console.log('JSON Server is running')
})
