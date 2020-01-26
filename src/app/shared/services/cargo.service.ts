import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class CargoService extends BaseService {

    serviceName = 'cargo';

    constructor(
        protected http: HttpClient) {
        super(http);
    }
}
