// require module
import dotenv from 'dotenv';
dotenv.config();

// import module
import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import router from './routes';
import dbConnect from '../config/db.config';

// Basic config
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.use(router);

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`listening on port ${port}`);

  //database connection
  dbConnect();
});
