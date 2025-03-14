import express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import routes from './routes'
import mysql from 'mysql'

const app = express();
const port = process.env.PORT || 3333;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(helmet({crossOriginResourcePolicy:false}));
app.use(routes);




app.listen(3333,()=>{
  console.log("Http server running")
})