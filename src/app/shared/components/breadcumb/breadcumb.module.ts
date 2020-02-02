import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../material-module';
import { BreadcumbComponent } from './breadcumb.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        BreadcumbComponent
    ],
    exports: [
        BreadcumbComponent
    ]
})
export class BreadcumbModule {
}
