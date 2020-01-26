import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TableColumn } from '../../../models/table-column.model';

@Component({
    selector: 'app-default-table',
    templateUrl: 'default-table.html',
    styleUrls: ['default-table.scss']
})
export class DefaultTableComponent {

    public displayedColumns: string[] = [];

    public columnsOrdered: TableColumn[] = [];
    get columns(): TableColumn[] {
        return this.columnsOrdered;
    }

    @Input('columns')
    set columns(cols: TableColumn[]) {
        this.columnsOrdered = cols.sort((tc1: TableColumn, tc2: TableColumn) => {
            if (tc1.displayOrder > tc2.displayOrder) {
                return 1;
            }

            if (tc1.displayOrder < tc2.displayOrder) {
                return -1;
            }

            return 0;
        });

        this.displayedColumns = [];
        this.columnsOrdered.forEach(column => {
            this.displayedColumns.push(column.definition);
        });

        if (this.hasActions) {
            this.displayedColumns.push('actions');
        }
    }

    @Input() rows: any = [];
    @Input() cardTitle: string;
    @Input() isLoading = false;

    @Input() emptyMessage = 'Nenhuma informação a ser listada.';

    @Input() hasActions = true;
    @Input() hasEditButton = true;
    @Input() hasDeleteButton = true;
    @Input() hasSearchButton = true;

    @Output() onCreateClick: EventEmitter<any> = new EventEmitter();
    @Output() onEditClick: EventEmitter<any> = new EventEmitter();
    @Output() onDeleteClick: EventEmitter<any> = new EventEmitter();
    @Output() onSearchClick: EventEmitter<any> = new EventEmitter();

    @Output() onSearchChange: EventEmitter<any> = new EventEmitter();

    public searchText: string;

    public cardMode = false;

    constructor() {
    }

    public editClickAction(item: any): void {
        this.onEditClick.emit(item);
    }

    public deleteClickAction(item: any): void {
        this.onDeleteClick.emit(item);
    }
}
