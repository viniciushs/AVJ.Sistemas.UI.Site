import { Routes } from '@angular/router';

import { FormaPagamentoListComponent } from './forma-pagamento-list/forma-pagamento-list.component';
import { FormaPagamentoDetailsComponent } from './forma-pagamento-details/forma-pagamento-details.component';

export const FormasPagamentoRoutes: Routes = [
  {
    path: '',
    component: FormaPagamentoListComponent
  },
  {
    path: 'create',
    component: FormaPagamentoDetailsComponent
  },
  {
    path: 'edit/:id',
    component: FormaPagamentoDetailsComponent
  }
];
