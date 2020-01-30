import { BaseModel } from './base.model';
import { Situacao } from './situacao.model';

export class Franqueado extends BaseModel {
    public idFranqueado: number;
    public descricaoFranqueado: string;
    public nomeFantasia: string;
    public cnpj: string;
    public cpf: string;
    public dataCancelamento: string;
    public dataCadastro: Date;
    public idSituacao: number;
    public situacao: Situacao = new Situacao();
    
    constructor(id?: number, descricao?: string, idSituacao?: number) {
        super(id);

        this.idFranqueado = id;
        this.descricaoFranqueado = descricao;
        this.idSituacao = idSituacao;
    }
}