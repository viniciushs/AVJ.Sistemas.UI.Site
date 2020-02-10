import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BaseComponent } from './base.component';
import { BaseService } from '../services/base.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export abstract class BaseDetailsComponent extends BaseComponent implements OnInit, OnDestroy {

    public id: number;
    public model: any;
    public form: FormGroup;
    public isEditMode = false;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public apiService: BaseService,
        public formBuilder: FormBuilder,
        public dialog?: MatDialog) {
        super(router, activatedRoute, dialog);
    }

    public ngOnInit() {
        super.ngOnInit();

        this.form = this.createFormGroup();

        this.getParams();
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }

    public createFormGroup(): FormGroup {
        return this.formBuilder.group({
            id: [null]
        });
    }

    public getParams() {
        this.id = Number(this.activatedRoute.snapshot.params['id']);

        if (this.id > 0) {
            this.isEditMode = true;

            this.apiService.obter(this.id)
                .subscribe((item: any) => {
                    this.model = item;
                    this.form.patchValue(this.model);
                    this.afterLoad();
                });
        } else {
            this.afterLoad();
        }
    }

    public load() {
        super.load();

        this.apiService
            .obter(this.id)
            .subscribe((response: any) => {
                this.afterLoad();
            });
    }

    public submit() {
        this.model = this.form.value;

        let request$ = this.apiService.incluir(this.model);
        if (this.isEditMode) {
            request$ = this.apiService.alterar(this.model);
        }

        request$.subscribe((response: any) => {
            this.back();
        });
    }

    public back() {
        this.router.navigateByUrl(this.baseUrl);
    }
}
