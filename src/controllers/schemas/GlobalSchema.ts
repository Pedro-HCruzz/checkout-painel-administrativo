import {string, object, array, number, boolean, InferType } from "yup";

export const ValidarUUIDSchema = string().uuid("Id Inválido!").required();