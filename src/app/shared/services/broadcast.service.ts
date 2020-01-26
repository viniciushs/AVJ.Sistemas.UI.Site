import { Observable, Subject, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { BroadcastData } from '../models/broadcast-data.model';
import { BroadcastEnum } from '../enums/broadcast.enum';

@Injectable()
export class BroadcastService {

    private _handler: Subject<BroadcastData> = new Subject<BroadcastData>();

    constructor() { }

    public send(message: BroadcastData) {
        this._handler.next(message);
    }

    public subscribe(type: BroadcastEnum, callback: (payload: any) => void): Subscription {
        return this._handler
            .filter(message => message.type === type)
            .map(message => message.data)
            .subscribe(callback);
    }
}
