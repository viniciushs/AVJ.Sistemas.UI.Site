import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Breadcumb } from '../../models/breadcumb.model';

@Component({
    selector: 'app-breadcumb',
    templateUrl: 'breadcumb.html',
    styleUrls: ['breadcumb.scss']
})
export class BreadcumbComponent {

    @Input() breadcumb: Breadcumb = new Breadcumb();

    @Output() onItemClick: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    public itemClickAction(item: any): void {
        this.onItemClick.emit(item);
    }
}
