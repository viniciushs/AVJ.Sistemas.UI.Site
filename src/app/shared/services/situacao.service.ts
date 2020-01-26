import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class SituacaoService extends BaseService {

    serviceName = 'situacao';

    constructor(
        protected http: HttpClient) {
        super(http);
    }
}
