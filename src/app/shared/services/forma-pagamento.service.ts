import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class FormaPagamentoService extends BaseService {

    serviceName = 'formapagto';

    constructor(
        protected http: HttpClient) {
        super(http);
    }
}
