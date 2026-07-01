import { Variantes } from "@prisma/client";
import { PrismaFactory } from "../factories/PrismaFactory";
import { IEditarVariante } from "../controllers/schemas/ProdutosSchema";

class VariantesRepository {

    async adicionar(dados: any) {
        return await PrismaFactory.variantes.createMany({
            data:dados
        })
    }

    async buscarTodas(id_produto: string) {
        return await PrismaFactory.variantes.findMany({
            where: {
                id_produto
            }
        })
    }

    async editar(dados: IEditarVariante, id: string) {
        return await PrismaFactory.variantes.update({
            where: {
                id
            },
            data: dados
        })
    }

    async desativar(id: string) {
        return await PrismaFactory.variantes.update({
            where: {
                id
            },
            data: {
              ativo: false  
            } 
        })
    }
}

export default VariantesRepository;