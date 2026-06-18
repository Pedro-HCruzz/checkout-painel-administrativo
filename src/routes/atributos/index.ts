import { Router } from "express";

import AtributosController from "../../controllers/AtributosController";

const atributosController = new AtributosController()

const routes = Router();

routes.post('/atributos', atributosController.adicionar);
routes.post('/atributos/valor/:id', atributosController.adicionarValorAtributo);

routes.patch('/atributos/:id', atributosController.editarAtributo);
routes.patch('/atributos/valor/:id', atributosController.editarValorAtributo)

export default routes;