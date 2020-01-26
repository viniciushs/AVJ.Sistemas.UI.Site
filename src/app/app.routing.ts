import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { NgModule } from '@angular/core';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/cargo',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./cargos/cargos.module').then(m => m.CargosModule)
      },
      {
        path: 'cargo',
        loadChildren:
          () => import('./cargos/cargos.module').then(m => m.CargosModule)
      },
      {
        path: 'forma-pagamento',
        loadChildren:
          () => import('./formas-pagamento/formas-pagamento.module').then(m => m.FormasPagamentoModule)
      },
      {
        path: 'franqueado',
        loadChildren:
          () => import('./franqueados/franqueados.module').then(m => m.FranqueadosModule)
      },
      {
        path: 'funcionario',
        loadChildren:
          () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule)
      },
      {
        path: 'situacao',
        loadChildren:
          () => import('./situacoes/situacoes.module').then(m => m.SituacoesModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
      anchorScrolling: 'disabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
