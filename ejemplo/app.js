const express = require('express');
const router = require('./routes');
const app = express();

app.use(express.json());
app.use('/api', router);

const PORT = parseInt(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});