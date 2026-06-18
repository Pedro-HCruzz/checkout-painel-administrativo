import {string, object, array, InferType } from "yup";

export const Adicionar = object().shape({
    nome: string().required("O nome é Obrigatório!"),
    valores: array(
        object().shape({
            valor: string().required("Defina um Nome para o Atributo!")
        }),
    ).nullable()
});

export const AdicionarValor = object().shape({
    valor: string().required("O nome do Valor do Atributo é Obrigatório!")    
})

export const EditarAtributo = object().shape({
    nome: string().required("O nome é Obrigatório!"),
});

export type IAdicionarValor = InferType<typeof AdicionarValor>
export type IAdicionarAtributo = InferType<typeof Adicionar>

export type IEditarAtributo = InferType<typeof EditarAtributo>