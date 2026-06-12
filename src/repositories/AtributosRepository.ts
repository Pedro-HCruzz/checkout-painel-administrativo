import { IAdicionarAtributo } from "../controllers/schemas/AtributosSchema";
import { PrismaFactory } from "../factories/PrismaFactory";

class AtributosRepository {

    async adicionar(nome: string) {
        return await PrismaFactory.atributos.create(
            { data:{
                nome
            }
        }
    );
    }

}

export default AtributosRepository;