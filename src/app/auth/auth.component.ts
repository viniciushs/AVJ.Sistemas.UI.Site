import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../shared/services/account.service';
import { TokenService } from '../shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public form: FormGroup;
  public model: any;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public apiService: AccountService,
    public tokenService: TokenService) {
  }

  public ngOnInit() {
    this.form = this.createFormGroup();
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      descricaoFuncionario: [null, [Validators.required, Validators.maxLength(128)]],
      senha: [null, [Validators.required, Validators.maxLength(128)]]
    });
  }

  public submit() {
    this.model = this.form.value;

    this.apiService
      .login(this.model)
      .subscribe((response: any) => {
        const token = response.token;
        this.tokenService.setLoggedToken(token);

        this.router.navigateByUrl('cargo');
      });
  }

}
