const express = require('express');
const runTest = require('./test-runner');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/run-test', async (req, res) => {
  try {
    const title = await runTest();
    res.json({ success: true, title });
  } catch (err) {
    console.error('Erro ao rodar o teste:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Playwright API está no ar! Acesse /run-test para rodar o teste.');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
