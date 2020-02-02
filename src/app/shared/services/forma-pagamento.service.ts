import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class FormaPagamentoService extends BaseService {

    serviceName = 'formapagto';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
