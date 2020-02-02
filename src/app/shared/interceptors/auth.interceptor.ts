
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {

        // const token = this.tokenService.getLoggedToken();
        // if (token) {
        //     headers = headers.set('Authorization', token);
        // }

        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'DCtbqRXC8L'),
        });

        return next.handle(authReq).pipe(map((event: HttpEvent<any>) => {
            return event;
        }));
    }
}
