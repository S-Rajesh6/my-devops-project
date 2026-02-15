const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Step 1 & 2 Success!</h1><p>The app is containerized and running.</p>');
});

// Step 6: Basic Health Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});