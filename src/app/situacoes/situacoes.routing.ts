import { Routes } from '@angular/router';

import { SituacaoDetailsComponent } from './situacao-details/situacao-details.component';
import { SituacaoListComponent } from './situacao-list/situacao-list.component';

export const SituacoesRoutes: Routes = [
  {
    path: '',
    component: SituacaoListComponent
  },
  {
    path: 'create',
    component: SituacaoDetailsComponent
  },
  {
    path: 'edit/:id',
    component: SituacaoDetailsComponent
  }
];
