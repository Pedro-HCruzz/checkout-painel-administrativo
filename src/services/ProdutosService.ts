import { IAdicionarProduto, IEditarProduto } from "../controllers/schemas/ProdutosSchema";
import ProdutosRepository from "../repositories/ProdutosRepository";

class ProdutosService {

    constructor(private readonly _produtosRepository: ProdutosRepository){

    }

    async buscarTodos(){
        return await this._produtosRepository.buscarTodos()
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

    async editar(dados: IEditarProduto, id: string,){
        return await this._produtosRepository.editar(dados, id)
    }

    async excluir(id: string,){
        return await this._produtosRepository.excluir(id)
    }
}

export default ProdutosService;