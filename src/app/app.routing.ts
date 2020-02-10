import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './shared/guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
        redirectTo: 'cargo',
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
