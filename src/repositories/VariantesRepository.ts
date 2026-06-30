import { Variantes } from "@prisma/client";
import { PrismaFactory } from "../factories/PrismaFactory";

class VariantesRepository {

    async adicionar(dados: any) {
        return await PrismaFactory.variantes.createMany({
            data:dados
        })
    }
}

export default VariantesRepository;