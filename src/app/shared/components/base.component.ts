import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { Breadcumb } from '../models/breadcumb.model';
import { BreadcumbItem } from '../models/breadcumb-item.model';

export abstract class BaseComponent implements OnInit, OnDestroy {

    protected baseUrl: string;

    public breadcumb: Breadcumb;

    protected queryString = '';
    public isLoading = false;

    protected subscriptions: Subscription = new Subscription();
    protected channel: any;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public dialog?: MatDialog) {
        const breadcumbItems = this.activatedRoute.snapshot.data.breadcumb;

        this.breadcumb = new Breadcumb(breadcumbItems);
    }

    public ngOnInit() {

    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public load(): void {
        this.isLoading = true;
    }

    public afterLoad(): void {
        this.isLoading = false;
    }

    public openDialog(target: any): MatDialogRef<unknown, any> {
        return this.dialog.open(target, {
            width: 'auto'
        });
    }

    public goToBreadcumbItem(item: BreadcumbItem) {
        if (item.route) {
            this.router.navigateByUrl(item.route);
        }
    }

    public copy(source: any) {
        return JSON.parse(JSON.stringify(source));
    }

    public simpleComparer(o1: any, o2: any): boolean {
        return o1 == o2;
    }

    public redirect(url: string, target?: string) {
        if (!url || url.length === 0) {
            return;
        }

        if (!url.startsWith('http')) {
            url = 'https://' + url;
        }

        window.open(url, target ? target : '_blank');
    }

    protected addQueryString(param: string, value: any) {
        if (this.queryString.length > 0) {
            this.queryString += '&';
        }

        this.queryString += `${param}=${value.toString()}`;
    }

    public log(message: string) {
        // Customize sua mensagem de log, inserindo data, horario, etc.
        console.log('---------------------');
        console.log(message);
        console.log('---------------------');
    }

    public error(message: string) {
        // Customize sua mensagem de erro, inserindo data, horario, etc.
        console.error('---------------------');
        console.error(message);
        console.error('---------------------');
    }
}