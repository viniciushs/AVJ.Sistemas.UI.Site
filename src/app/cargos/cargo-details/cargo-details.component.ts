import { Component } from '@angular/core';
import { BaseDetailsComponent } from '../../shared/components/base-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CargoService } from '../../shared/services/cargo.service';
import { MatDialog } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.scss']
})
export class CargoDetailsComponent extends BaseDetailsComponent {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public apiService: CargoService,
    public formBuilder: FormBuilder) {
    super(router, activatedRoute, apiService, formBuilder);

    this.baseUrl = 'cargo';
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      idCargo: [{value: null, disabled: true}],
      descricaoCargo: [null, [Validators.required, Validators.maxLength(128)]]
    });
  }
}
