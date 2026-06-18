import { Response, Request } from "express"

import { Adicionar, AdicionarValor, EditarAtributo } from "./schemas/AtributosSchema"
import { AtributosServiceFactory } from "../factories/AtributosFactory"

class AtributosController {

    async adicionar(Req: Request, Res: Response){
        try {
            await Adicionar.validate(Req.body)

            const retorno = await AtributosServiceFactory.adicionar(Req.body);

            Res.json(retorno)
        } catch (err: any) {            
            Res.status(400).json({ error: err.message})
        }
    }

    async adicionarValorAtributo(Req: Request, Res: Response) {
        try {
            await AdicionarValor.validate(Req.body);

            if(!Req.params.id){
                throw new Error("Por favor, selecione um atributo para adicionar o valor!")
            }

            const atributos = await AtributosServiceFactory.adicionarValorAtributo(Req.body, Req.params.id as string)

            Res.status(201).json({atributos})

        } catch (err: any) {
            Res.status(400).json({error: err.message});
        }
    }

    async editarAtributo(Req: Request, Res: Response) {
        try {
            await EditarAtributo.validate(Req.body);

            const atributoEditado = await AtributosServiceFactory.editarAtributo(Req.body, Req.params.id as string)
            Res.status(201).json({atributoEditado})

        } catch (err: any) {
           Res.status(400).json({ error: err.message }) 
        }
    }

    async editarValorAtributo(Req: Request, Res: Response) {
        try {
            
        } catch (err: any) {
           Res.status(400).json({ error: err.message }) 
        }
    }
}

export default AtributosController