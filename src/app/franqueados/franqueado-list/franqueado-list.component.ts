import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../shared/components/base-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TableColumn } from '../../shared/models/table-column.model';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material';
import { BroadcastService } from '../../shared/services/broadcast.service';
import { Franqueado } from '../../shared/models/franqueado.model';
import { FranqueadoSearch } from '../../shared/models/franqueado-search.model';
import { FranqueadoSearchDialogComponent } from '../franqueado-search-dialog/franqueado-search-dialog.component';
import { FranqueadoService } from '../../shared/services/franqueado.service';

@Component({
  selector: 'app-franqueado-list',
  templateUrl: './franqueado-list.component.html',
  styleUrls: ['./franqueado-list.component.scss']
})
export class FranqueadoListComponent extends BaseListComponent implements OnInit {

  searchModel: FranqueadoSearch = new FranqueadoSearch();

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public apiService: FranqueadoService,
    public broadcastService: BroadcastService,
    public dialog: MatDialog) {
    super(router, activatedRoute, apiService, broadcastService);

    this.baseUrl = 'franqueado';

    this.tableColumns.push(new TableColumn('Identificador', 'idFranqueado', 1, (column: Franqueado) => column.idFranqueado));
    this.tableColumns.push(new TableColumn('Descrição', 'descricaoFranqueado', 2, (column: Franqueado) => column.descricaoFranqueado));
    this.tableColumns.push(new TableColumn('Situação', 'descricaoSituacao', 3, (column: Franqueado) => column.situacao.descricaoSituacao));
  }

  public loadQueryString() {
    super.loadQueryString();

    if (this.searchModel.descricao) {
      this.addQueryString('descricao', this.searchModel.descricao);
    }

    if (this.searchModel.idSituacao) {
      this.addQueryString('idSituacao', this.searchModel.idSituacao);
    }
  }

  public edit(model: Franqueado) {
    this.router.navigate([`${this.baseUrl}/edit`, model.idFranqueado]);
  }

  public delete(model: Franqueado) {
    Swal.fire({
      title: 'Excluir?',
      text: 'Você deseja excluir esse registro?',
      showCancelButton: true,
      confirmButtonText: 'Sim, delete-o!',
      cancelButtonText: 'Não, mantenha-o!'
    }).then((result) => {
      if (result.value) {
        this.apiService.excluir(model.idFranqueado)
          .subscribe((response: any) => {
            this.load();

            Swal.fire({
              title: 'Excluído!',
              text: 'O registro foi excluido com sucesso.'
            });
          });
      } else {
        Swal.fire({
          title: 'Cancelado',
          text: 'O registro não foi excluído'
        });
      }
    });
  }

  public openSearch(open: boolean) {
    const dialogRef = this.openDialog(FranqueadoSearchDialogComponent);

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.searchModel = result;
          this.load();
        }
      });
  }
}
