import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(private toastr: ToastrService) { }

    public success(message: string, title?: string) {
        this.toastr.success(message, title);
    }

    public warning(message: string, title?: string) {
        this.toastr.warning(message, title);
    }

    public error(message: string, title?: string) {
        this.toastr.error(message, title);
    }
}
