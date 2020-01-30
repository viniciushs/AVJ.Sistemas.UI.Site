import { Component, OnInit } from '@angular/core';
import { BaseDetailsComponent } from '../../shared/components/base-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FranqueadoService } from '../../shared/services/franqueado.service';
import { SituacaoService } from '../../shared/services/situacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Situacao } from '../../shared/models/situacao.model';

@Component({
  selector: 'app-franqueado-details',
  templateUrl: './franqueado-details.component.html',
  styleUrls: ['./franqueado-details.component.scss']
})
export class FranqueadoDetailsComponent extends BaseDetailsComponent implements OnInit {

  public situacoes: Situacao[] = [];

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public apiService: FranqueadoService,
    public situacaoService: SituacaoService,
    public formBuilder: FormBuilder) {
    super(router, activatedRoute, apiService, formBuilder);

    this.baseUrl = 'cargo';
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      idFranqueado: [0],
      descricaoFranqueado: [null, [Validators.required, Validators.maxLength(128)]],
      // nomeFantasia: [null, [Validators.maxLength(128)]],
      // cnpj: [null, [Validators.maxLength(14)]],
      cpf: [null, [Validators.required, Validators.maxLength(11)]],
      dataCancelamento: [null],
      dataCadastro: [new Date()],
      idSituacao: [null, Validators.required]
    });
  }

  public ngOnInit() {
    super.ngOnInit();

    this.loadSituacoes();
  }

  public loadSituacoes() {
    this.situacaoService
      .pesquisar()
      .subscribe((resp: any) => {
        this.situacoes = resp.collection;
      });
  }

  public submit() {
    debugger;
    this.model = this.form.value;
    this.model.idSituacao = +this.model.idSituacao;

    let request$ = this.apiService.incluir(this.model);
    if (this.isEditMode) {
        request$ = this.apiService.alterar(this.model);
    }

    request$.subscribe((response: any) => {
        this.back();
    });
}
}
