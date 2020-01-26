import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';

export abstract class BaseComponent implements OnInit, OnDestroy {

    protected baseUrl: string;

    protected queryString = '';
    public isLoading = false;

    protected subscriptions: Subscription = new Subscription();
    protected channel: any;

    constructor(
        public router: Router,
        public dialog?: MatDialog) {
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

    public copy(source: any) {
        return JSON.parse(JSON.stringify(source));
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