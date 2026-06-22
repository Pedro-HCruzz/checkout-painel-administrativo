import {Request, Response } from "express";

import { AdicionarProduto, EditarProduto } from "./schemas/ProdutosSchema";
import { ProdutosServiceFactory } from "../factories/ProdutosFactory";

class ProdutosController {

    async adicionar(Req: Request, Res: Response) {
        try {
            await AdicionarProduto.validate(Req.body);

            const retorno = await ProdutosServiceFactory.adicionar(Req.body)
            Res.status(201).json(retorno)

        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async editar(Req: Request, Res: Response) {
        try {
            await EditarProduto.validate(Req.body);

            const retorno = await ProdutosServiceFactory.editar(Req.body, Req.params.id as string)
            Res.status(201).json(retorno)
            
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }
}

export default ProdutosController;