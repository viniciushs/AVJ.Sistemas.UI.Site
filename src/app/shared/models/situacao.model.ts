import { BaseModel } from './base.model';

export class Situacao extends BaseModel {
    idSituacao: number;
    descricaoSituacao: string;

    constructor(id?: number, descricao?: string) {
        super(id);

        this.idSituacao = id;
        this.descricaoSituacao = descricao;
    }
}