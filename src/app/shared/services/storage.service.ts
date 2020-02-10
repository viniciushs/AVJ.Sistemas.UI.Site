import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class StorageService {

    constructor() {
    }

    public getItem(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            return null;
        }
    }

    public setItem(key: string, item: any) {
        localStorage.setItem(key, JSON.stringify(item));
    }

    public removeItem(key: string) {
        localStorage.removeItem(key);
    }

    public clear() {
        localStorage.clear();
    }
}
