import { Router } from "express";

import ProdutosController from "../../controllers/ProdutosController";

const produtosController = new ProdutosController()

const routes = Router();

routes.post('/produtos', produtosController.adicionar)

routes.patch('/produtos/:id', produtosController.editar)
routes.delete('/produtos/:id', produtosController.excluir)

export default routes;