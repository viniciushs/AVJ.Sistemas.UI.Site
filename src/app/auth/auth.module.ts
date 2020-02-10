import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { AccountService } from '../shared/services/account.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    AccountService
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule {}
