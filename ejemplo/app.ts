require('dotenv').config();
import express from 'express';
import router from './routes';
const app = express();

app.use(express.json());
app.use('/v1/api', router);
app.use('/v3/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});