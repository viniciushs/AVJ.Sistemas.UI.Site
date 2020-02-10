
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {

        let headers = req.headers;
        const token = this.tokenService.getLoggedToken();
        if (token) {
            headers = headers.set('Authorization', `Bearer ${token}`);
        }

        const authReq = req.clone({
            headers: headers
        });

        return next.handle(authReq).pipe(map((event: HttpEvent<any>) => {
            return event;
        }));
    }
}
