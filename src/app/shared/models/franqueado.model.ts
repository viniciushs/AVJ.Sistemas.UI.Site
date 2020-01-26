import { BaseModel } from './base.model';
import { Situacao } from './situacao.model';

export class Franqueado extends BaseModel {
    idFranqueado: number;
    descricaoFranqueado: string;
    idSituacao: number;
    situacao: Situacao = new Situacao();

    constructor(id?: number, descricao?: string, idSituacao?: number) {
        super(id);

        this.idFranqueado = id;
        this.descricaoFranqueado = descricao;
        this.idSituacao = idSituacao;
    }
}