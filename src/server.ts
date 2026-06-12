import Express from "express";
import dotenv from "dotenv";

import rotasProduto from "./routes/produtos"
import rotasAtributos from "./routes/atributos"

dotenv.config();

const server = Express();

server.use(Express.json());

server.use(rotasProduto)
server.use(rotasAtributos)

server.listen(process.env.PORT)
console.log(`Rodando na Porta: ${process.env.PORT}`)