import { Router } from "express";

import CategoriasController from "../../controllers/CategoriasController";

const categoriasController = new CategoriasController()

const routes = Router();

routes.get('/categorias', categoriasController.buscarTodas)

export default routes;