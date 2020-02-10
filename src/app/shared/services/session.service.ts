import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable()
export class SessionService {

    constructor(public tokenService: TokenService) {
    }

    public isLoggedIn(): boolean {
        const token = this.tokenService.getLoggedToken();
        if (token) {
            return true;
        }

        return false;
    }
}
