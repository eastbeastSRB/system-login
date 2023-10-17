// require module
import * as dotenv from 'dotenv';
dotenv.config();

// import module
import express, { Express } from 'express';
import config from 'config';
import router from './routes';
import dbConnect from './utils/db.config';

// Basic config
const app: Express = express();
app.use(express.json());
app.use(router);

const port = config.get('port');
app.listen(port, () => {
  console.log(`listening on port ${port}`);

  //database connection
  dbConnect();
});
