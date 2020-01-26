import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class FuncionarioService extends BaseService {

    serviceName = 'funcionario';

    constructor(
        protected http: HttpClient) {
        super(http);
    }
}
