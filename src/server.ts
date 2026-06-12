import Express from "express";
import dotenv from "dotenv";

import rotasProduto from "./routes/produtos"

dotenv.config();

const server = Express();

server.use(rotasProduto)

server.listen(process.env.PORT)
console.log(`Rodando na Porta: ${process.env.PORT}`)