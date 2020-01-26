import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DefaultTableComponent } from './default-table/default-table.component';
import { MaterialModule } from '../../../material-module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        DefaultTableComponent
    ],
    exports: [
        DefaultTableComponent
    ]
})
export class TablesModule {
}
