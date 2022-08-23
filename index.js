// Servidor com express
const express = require('express');
const app = express()

app.listen('3000')

// GET - Listar  
app.route('/home').get((req, res) => res.send("Olá, primeira chamada http.get realizada com sucesso"))
app.route('/sobre').get((req, res) => res.send("Olá, segunda chamada http.get realizada com sucesso"))

// Middleware - Ponte entre as requisções // Transformar tudo em json, 
// bate na routa, vai no middleware e depois vai para a resposta  
app.use(express.json())

// POST - Tudo que é enviado no post, está dentro do req(request).body - Conteúdo da requisição
app.route('/').post((req, res) => res.send(req.body))

// PUT - Atualizar info - Espera alguma coisa no body
let author = "Joseph"
app.route('/').get((req, res) => res.send(author))
app.route('/').put((req, res) => {
    author = req.body.author
    console.log(author)
    res.send(author)
})

// DELETE - Remover algo / Delete recebe um identificador na URL / Pagar pegar o id, req.params.identificador
app.route('/:identificador').delete((req, res) => {
    author = ""
    res.send(req.params.identificador);
})