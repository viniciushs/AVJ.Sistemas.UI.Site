import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SituacoesRoutes } from './situacoes.routing';
import { SituacaoService } from '../shared/services/situacao.service';
import { SituacaoListComponent } from './situacao-list/situacao-list.component';
import { SituacaoDetailsComponent } from './situacao-details/situacao-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SituacoesRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SituacaoService
  ],
  entryComponents: [],
  declarations: [
    SituacaoListComponent,
    SituacaoDetailsComponent
  ]
})
export class SituacoesModule {}
