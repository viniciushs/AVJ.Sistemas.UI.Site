import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class FranqueadoService extends BaseService {

    serviceName = 'franqueado';

    constructor(
        protected http: HttpClient) {
        super(http);
    }
}
