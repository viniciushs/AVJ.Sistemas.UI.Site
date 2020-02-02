import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public alertService: AlertService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        return next.handle(request)
            .pipe(
                tap(data => {
                    if (data instanceof HttpResponse) {
                        if (data.body && data.body.error) {
                            this.alertService.error(data.body.error);
                            throw new Error(data.body.error);
                        }
                    }
                }),
                catchError(err => {
                    switch (err.status) {

                        case 400:
                            const error400 = err.error.title;
                            this.alertService.error(error400);
                            break;

                        case 500:
                            const error500 = err.error.message || err.statusText;
                            this.alertService.error(error500);
                            console.error(err.error);
                            break;

                    }

                    return throwError(err);
                }));
    }
}
