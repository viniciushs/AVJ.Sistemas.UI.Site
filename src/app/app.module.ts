
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { MaterialModule } from './material-module';
import { BroadcastService } from './shared/services/broadcast.service';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './shared/interceptors/interceptor.module';
import { AlertService } from './shared/services/alert.service';
import { SessionService } from './shared/services/session.service';
import { StorageService } from './shared/services/storage.service';
import { TokenService } from './shared/services/token.service';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      maxOpened: 1,
      autoDismiss: true
    }),
    InterceptorModule
  ],
  providers: [
    AlertService,
    BroadcastService,
    SessionService,
    StorageService,
    TokenService,
    // AuthService,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
