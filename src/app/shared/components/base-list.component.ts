import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BaseComponent } from './base.component';
import { BaseService } from '../services/base.service';

import Swal from 'sweetalert2';
import { TableColumn } from '../models/table-column.model';
import { BaseSearch } from '../models/base-search.model';
import { BroadcastService } from '../services/broadcast.service';
import { BroadcastEnum } from '../enums/broadcast.enum';
import { BroadcastData } from '../models/broadcast-data.model';

export abstract class BaseListComponent extends BaseComponent implements OnInit, OnDestroy {

    protected pagination: any;

    public tableColumns: TableColumn[] = [];
    public tableRows: any[];

    protected searchModel: BaseSearch;

    protected createChannel: any;
    protected searchChannel: any;

    constructor(
        public router: Router,
        public apiService: BaseService,
        public broadcastService: BroadcastService,
        public dialog?: MatDialog) {
        super(router, dialog);
    }

    public ngOnInit() {
        super.ngOnInit();

        this.createChannel = this.broadcastService.subscribe(BroadcastEnum.Create, () => {
            this.create();
        });
        this.subscriptions.add(this.createChannel);

        this.searchChannel = this.broadcastService.subscribe(BroadcastEnum.Search, () => {
            this.openSearch(true);
        });
        this.subscriptions.add(this.searchChannel);

        this.load();
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }

    public load() {
        super.load();

        this.loadQueryString();

        this.apiService
            .pesquisar(this.queryString)
            .subscribe((response: any) => {
                this.tableRows = response.collection;
                this.afterLoad();
            });
    }

    public loadQueryString(): void {
        if (this.searchModel.id) {
            this.addQueryString('id', this.searchModel.id);
        }
    }

    public afterLoad() {
        super.afterLoad();

        this.queryString = '';
    }

    public create($event?: any) {
        this.router.navigate([`${this.baseUrl}/create`]);
    }

    public edit(model: any) {
        this.router.navigate([`${this.baseUrl}/edit`, model.id]);
    }

    public openSearch(open: boolean) {
    }

    public delete(model: any) {
        Swal.fire({
            title: 'Excluir?',
            text: 'Você deseja excuir esse registro?',
            showCancelButton: true,
            confirmButtonText: 'Sim, delete-o!',
            cancelButtonText: 'Não, mantenha-o!'
        }).then((result) => {
            if (result.value) {
                this.apiService.excluir(model.id)
                    .subscribe((response: any) => {
                        this.load();

                        Swal.fire({
                            title: 'Excluído!',
                            text: 'O registro foi excluido com sucesso.'
                        });
                    });
            } else {
                Swal.fire({
                    title: 'Cancelado',
                    text: 'O registro não foi excluído'
                });
            }
        });
    }
}
