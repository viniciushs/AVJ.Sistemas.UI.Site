import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormaPagamentoListComponent } from './forma-pagamento-list/forma-pagamento-list.component';
import { FormasPagamentoRoutes } from './formas-pagamento.routing';
import { FormaPagamentoService } from '../shared/services/forma-pagamento.service';
import { FormaPagamentoDetailsComponent } from './forma-pagamento-details/forma-pagamento-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormasPagamentoRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormaPagamentoService
  ],
  entryComponents: [],
  declarations: [
    FormaPagamentoListComponent,
    FormaPagamentoDetailsComponent
  ]
})
export class FormasPagamentoModule {}
