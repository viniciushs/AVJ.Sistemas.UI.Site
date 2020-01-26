import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FranqueadoSearch } from '../../shared/models/franqueado-search.model';
import { SituacaoService } from '../../shared/services/situacao.service';

@Component({
  selector: 'app-franqueado-search-dialog',
  templateUrl: './franqueado-search-dialog.component.html',
  styleUrls: ['./franqueado-search-dialog.component.scss']
})
export class FranqueadoSearchDialogComponent implements OnInit {

  public model: FranqueadoSearch = new FranqueadoSearch();

  public situacoes: any[] = [];

  constructor(
    public situacaoService: SituacaoService,
    public dialogRef: MatDialogRef<FranqueadoSearchDialogComponent>) {
  }

  public ngOnInit() {
    this.loadSituacoes();
  }

  public loadSituacoes() {
    this.situacaoService
      .pesquisar()
      .subscribe((resp: any) => {
        this.situacoes = resp.collection;
      });
  }

  public cancel($event: any): void {
    this.dialogRef.close();
  }
}
