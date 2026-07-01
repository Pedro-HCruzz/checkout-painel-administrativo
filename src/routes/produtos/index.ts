import { Router } from "express";

import ProdutosController from "../../controllers/ProdutosController";

const produtosController = new ProdutosController()

const routes = Router();

routes.get('/produtos', produtosController.buscarTodos)
routes.post('/produtos', produtosController.adicionar)
routes.patch('/produtos/:id', produtosController.editar)
routes.delete('/produtos/:id', produtosController.excluir)
routes.patch('/produtos/variantes/:id', produtosController.editarVariante)

export default routes;