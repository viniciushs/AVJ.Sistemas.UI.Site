import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FranqueadosRoutes } from './franqueados.routing';
import { FranqueadoService } from '../shared/services/franqueado.service';
import { FranqueadoListComponent } from './franqueado-list/franqueado-list.component';
import { FranqueadoDetailsComponent } from './franqueado-details/franqueado-details.component';
import { FranqueadoSearchDialogComponent } from './franqueado-search-dialog/franqueado-search-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material-module';
import { SituacaoService } from '../shared/services/situacao.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FranqueadosRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    NgxMaskModule
  ],
  providers: [
    SituacaoService,
    FranqueadoService
  ],
  entryComponents: [
    FranqueadoSearchDialogComponent
  ],
  declarations: [
    FranqueadoListComponent,
    FranqueadoDetailsComponent,
    FranqueadoSearchDialogComponent
  ]
})
export class FranqueadosModule {}
