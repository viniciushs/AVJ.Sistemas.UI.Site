import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';

@Injectable()
export class CargoService extends BaseService {

    serviceName = 'cargo';

    constructor(
        @SkipSelf() protected http: HttpClient) {
        super(http);
    }
}
