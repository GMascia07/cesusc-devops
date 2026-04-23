const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

// Middleware para servir arquivos estáticos (se precisar)
app.use(express.static(path.join(__dirname, 'views')))

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// Rota de exemplo (boa pra teste)
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' })
})

// Inicialização do servidor (só roda se não estiver em teste)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
  })
}

// Exporta o app (IMPORTANTE para testes com Jest depois)
module.exports = app