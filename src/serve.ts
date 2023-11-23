require('dotenv').config();

import router from './routes/route';

import app from './api';

const port = process.env.API_PORT || 8800;

app.use(router);

app.listen(port, () => {
  console.log(`Online na porta ${port}`);
});