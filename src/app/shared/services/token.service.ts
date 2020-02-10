import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenService {
    private authTokenKey: string;
    private userTokenKey: string;

    constructor(private storageService: StorageService) {
        this.authTokenKey = environment.tokenAuthStorage;
    }

    public getLoggedToken(): string {
        return this.storageService.getItem(this.authTokenKey);
    }

    public setLoggedToken(token: string) {
        this.storageService.setItem(this.authTokenKey, token);
    }

    public removeLoggedToken(): void {
        this.storageService.removeItem(this.authTokenKey);
    }

    public logout(): void {
        this.removeLoggedToken();

        this.storageService.clear();
    }
}
