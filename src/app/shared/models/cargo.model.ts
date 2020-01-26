import { BaseModel } from './base.model';

export class Cargo extends BaseModel {
    idCargo: number;
    descricaoCargo: string;

    constructor(id?: number, descricao?: string) {
        super(id);

        this.idCargo = id;
        this.descricaoCargo = descricao;
    }
}