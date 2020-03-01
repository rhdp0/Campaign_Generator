const express = require('express')
const server = express()

//Configurar arquivos estáticos
server.use(express.static('public'))

//Configurar template engine
const nunjucks = require('nunjucks')
nunjucks.configure('./', {
    express: server,
    noCache: true
})

//Configurar apresentação da página
server.get('/', function(req, res) {
    return res.render('index.html')
})

server.get('/aventura-baseada-em-local', function(req, res) {
    return res.render('./campanhas/local/index.html')
})

//Ligar o servidor e permitir acesso à porta
server.listen(3000)