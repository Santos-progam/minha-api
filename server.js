const express = require('express');

const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ mensagem: 'API funcionando!' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
