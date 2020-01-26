import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export abstract class BaseService {

    protected serviceName: string;

    constructor(
        protected http: HttpClient) {
    }

    protected get url() {
        return environment.apiEndpoint + this.serviceName;
    }

    public obter(id: number) {
        return this.http.get(`${this.url}/obter/${id}`);
    }

    public pesquisar(querystring?: string) {
        let url = `${this.url}/pesquisar`;
        if (querystring && querystring.length > 0) {
            url = url + '?' + querystring;
        }

        return this.http.get(url);
    }

    public salvar(model: any) {
        if (model.id) {
            return this.alterar(model);
        } else {
            return this.incluir(model);
        }
    }

    public incluir(model: any) {
        return this.http.post(`${this.url}/incluir`, model);
    }

    public alterar(model: any) {
        return this.http.put(`${this.url}/alterar`, model);
    }

    public excluir(id: number) {
        return this.http.delete(`${this.url}/excluir/${id}`);
    }
}
