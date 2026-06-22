import { IAdicionarProduto } from "../controllers/schemas/ProdutosSchema";
import ProdutosRepository from "../repositories/ProdutosRepository";

class ProdutosService {

    constructor(private readonly _produtosRepository: ProdutosRepository){

    }

    async adicionar(dados: IAdicionarProduto){
        const payloadAdicionarProduto: IAdicionarProduto = {
            descricao: dados.descricao,
            nome: dados.nome,
            ativo: dados.ativo,
            id_categoria: dados.id_categoria
        }
        const produtoAdicionado = await this._produtosRepository.adicionar(payloadAdicionarProduto);
        
        console.log(produtoAdicionado);

        return produtoAdicionado;
    }
}

export default ProdutosService;