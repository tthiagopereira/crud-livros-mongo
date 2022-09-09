import express from "express";
const app = express();
import db from './config/dbConnect.js';
import routes from "./routes/index.js";

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log('Conexão realizada com sucesso')
})

app.use(express.json())

routes(app);


export default app;