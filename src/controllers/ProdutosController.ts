import {Request, Response } from "express";

class ProdutosController {

    async adicionar(Req: Request, Res: Response) {
        console.log(Req.body)
    }
}

export default ProdutosController;