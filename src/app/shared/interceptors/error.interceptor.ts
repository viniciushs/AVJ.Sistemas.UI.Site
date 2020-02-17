import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        public router: Router,
        public alertService: AlertService,
        public tokenService: TokenService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        return next.handle(request)
            .pipe(
                catchError(err => {
                    switch (err.status) {

                        case 400:
                            const error400 = err.error.title || err.error.mensagem || err.error.message;
                            this.alertService.error(error400);

                            if (err.error.notificacoes && err.error.notificacoes.length > 0) {
                                const notificacao = err.error.notificacoes[0];
                                console.error(notificacao);
                            }

                            break;

                        case 401:
                            this.tokenService.logout();
                            this.router.navigate([`auth/login`]);

                            break;

                        case 500:
                            const error500 = err.statusText || err.error.message;
                            this.alertService.error(error500);
                            console.error(err.error);
                            break;

                    }

                    return throwError(err);
                }));
    }
}
