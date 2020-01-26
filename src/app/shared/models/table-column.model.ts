export class TableColumn {
    label: string;
    definition: string;
    displayOrder: number;
    displayFn: Function;

    constructor(
        label?: string,
        definition?: string,
        displayOrder?: number,
        displayFn?: Function) {
        this.label = label;
        this.definition = definition;
        this.displayOrder = displayOrder;
        this.displayFn = displayFn;
    }
}
