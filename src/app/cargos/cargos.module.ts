import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargosRoutes } from './cargos.routing';
import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';
import { CargoService } from '../shared/services/cargo.service';
import { MaterialModule } from '../material-module';
import { SharedModule } from '../shared/shared.module';
import { CargoSearchDialogComponent } from './cargo-search-dialog/cargo-search-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CargosRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    CargoService
  ],
  entryComponents: [
    CargoSearchDialogComponent
  ],
  declarations: [
    CargoListComponent,
    CargoDetailsComponent,
    CargoSearchDialogComponent
  ]
})
export class CargosModule {}
