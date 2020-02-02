import { BreadcumbItem } from './breadcumb-item.model';

export class Breadcumb {
    items: BreadcumbItem[] = [];

    constructor(items?: BreadcumbItem[]) {
        this.items = items;
    }
}
