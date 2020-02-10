import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AccountService {

    public serviceName = 'account';

    constructor(
        @SkipSelf() protected http: HttpClient) {
    }

    protected get url() {
        return environment.apiEndpoint + this.serviceName;
    }

    public login(model: any) {
        return this.http.post(`${this.url}/login`, model);
    }

    public logout() {
        return this.http.post(`${this.url}/logout`, null);
    }
}
