import { Variantes } from "@prisma/client";
import { IAdicionarProduto, IAdicionarVariante, IEditarProduto } from "../controllers/schemas/ProdutosSchema";
import ProdutosRepository from "../repositories/ProdutosRepository";
import VariantesService from "./VariantesService";

class ProdutosService {

    constructor(private readonly _produtosRepository: ProdutosRepository, private readonly _variantesService: VariantesService){

    }

    async buscarTodos(){
        return await this._produtosRepository.buscarTodos()
    }

    async organizarPayloadAdicionarVariantes(id_produto: string,dados: IAdicionarVariante){
        if (dados) {

            const payload = dados.map((variante) => {
                const { sku, preco, comprimento, estoque, peso, combo, altura, largura, ativo, json_caracteristicas, principal } = variante;
                return {
                    id_produto, sku, preco, comprimento, estoque, peso, combo, altura, largura, ativo, 
                    json_caracteristicas: json_caracteristicas ?? null, principal
                }
            });

            return payload;
        }

        return [];
    }

    async adicionar(dados: IAdicionarProduto){
        const payloadAdicionarProduto: IAdicionarProduto = {
            descricao: dados.descricao,
            nome: dados.nome,
            ativo: dados.ativo,
            id_categoria: dados.id_categoria
        }

        const produtoAdicionado = await this._produtosRepository.adicionar(payloadAdicionarProduto);   
        
        if (dados.variantes) {
            const payloadAdicionarVariantes = await this.organizarPayloadAdicionarVariantes(produtoAdicionado.id as string, dados.variantes);

            await this._variantesService.adicionar(payloadAdicionarVariantes);
        }

        //console.log(dados.variantes)

        return {status: "sucess"};
    }

    async editar(dados: IEditarProduto, id: string,){
        return await this._produtosRepository.editar(dados, id)
    }

    async excluir(id: string,){
        return await this._produtosRepository.excluir(id)
    }
}

export default ProdutosService;