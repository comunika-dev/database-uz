import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import routes from './routes'
import 'dotenv/config'

// dotenv.config();
const app = express();
const port = process.env.PORT || 3434;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(helmet({crossOriginResourcePolicy:false}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PATCH, OPTIONS");
  next();
});

app.use(routes);




app.listen(3434,()=>{
  console.log("Http server running")
})