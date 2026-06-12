import {string, object, array, InferType } from "yup";

export const Adicionar = object().shape({
    nome: string().required("O nome é Obrigatório!"),
    valores: array(
        object().shape({
            valor: string().required("Defina um Nome para o Atributo!")
        }),
    ).nullable()
});

export type IAdicionarAtributo = InferType<typeof Adicionar>