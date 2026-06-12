import { Router } from "express";

import AtributosController from "../../controllers/AtributosController";

const atributosController = new AtributosController()

const routes = Router();

routes.post('/atributos', atributosController.adicionar)

export default routes;