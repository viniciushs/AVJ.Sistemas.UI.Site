import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionarioService } from '../shared/services/funcionario.service';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { FuncionariosRoutes } from './funcionarios.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FuncionariosRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FuncionarioService
  ],
  entryComponents: [],
  declarations: [
    FuncionarioListComponent,
    FuncionarioDetailsComponent
  ]
})
export class FuncionariosModule {}
