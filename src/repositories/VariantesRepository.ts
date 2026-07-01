import { Variantes } from "@prisma/client";
import { PrismaFactory } from "../factories/PrismaFactory";

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
}

export default VariantesRepository;