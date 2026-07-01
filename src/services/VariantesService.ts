import { IEditarVariante } from "../controllers/schemas/ProdutosSchema";
import { Variantes } from "../models/Variantes";
import { VariantesValores } from "../models/VariantesValores";
import VariantesRepository from "../repositories/VariantesRepository";
import VariantesValoresRepository from "../repositories/VariantesValoresRepository";

class VariantesService {
    constructor(
        private readonly _variantesRepository: VariantesRepository, 
        private readonly _variantesValoresRepository: VariantesValoresRepository
    ){}

    async adicionar(dados: Variantes[]) {
        return await this._variantesRepository.adicionar(dados)
    }

    async adicionarVariantesValores(dados: VariantesValores[]) {
        return await this._variantesValoresRepository.adicionarVarios(dados)
    }

    async editarVariante(dados: IEditarVariante, id: string){
        return await this._variantesRepository.editar(dados,id);

    }

    async buscarTodas(id_produto: string) {
        return await this._variantesRepository.buscarTodas(id_produto)
    }

    async desativarVariante(id: string){
        return await this._variantesRepository.desativar(id)
    }

    async desativarValorVariante(id: string){
        return await this._variantesValoresRepository.desativar(id)
    }
}

export default VariantesService;