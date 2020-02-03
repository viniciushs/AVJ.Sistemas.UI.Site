import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../shared/components/base-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CargoService } from '../../shared/services/cargo.service';
import { Cargo } from '../../shared/models/cargo.model';
import { TableColumn } from '../../shared/models/table-column.model';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material';
import { CargoSearchDialogComponent } from '../cargo-search-dialog/cargo-search-dialog.component';
import { BroadcastService } from '../../shared/services/broadcast.service';
import { CargoSearch } from '../../shared/models/cargo-search.model';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.scss']
})
export class CargoListComponent extends BaseListComponent implements OnInit {

  searchModel: CargoSearch = new CargoSearch();

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public apiService: CargoService,
    public broadcastService: BroadcastService,
    public dialog: MatDialog) {
    super(router, activatedRoute, apiService, broadcastService);

    console.log(this.breadcumb);

    this.baseUrl = 'cargo';

    this.tableColumns.push(new TableColumn('Identificador', 'idCargo', 1, (column: Cargo) => column.idCargo));
    this.tableColumns.push(new TableColumn('Descrição', 'descricaoCargo', 2, (column: Cargo) => column.descricaoCargo));
  }

  public loadQueryString() {
    super.loadQueryString();

    if (this.searchModel.descricao) {
      this.addQueryString('descricao', this.searchModel.descricao);
    }
  }

  public edit(model: Cargo) {
    this.router.navigate([`${this.baseUrl}/edit`, model.idCargo]);
  }

  public delete(model: any) {
    Swal.fire({
      title: 'Excluir?',
      text: 'Você deseja excluir esse registro?',
      showCancelButton: true,
      confirmButtonText: 'Sim, delete-o!',
      cancelButtonText: 'Não, mantenha-o!'
    }).then((result) => {
      if (result.value) {
        this.apiService.excluir(model.idCargo)
          .subscribe((response: any) => {
            this.load();

            Swal.fire({
              title: 'Excluído!',
              text: 'O registro foi excluido com sucesso.'
            });
          }, (err) => {
            //Seu erro aqui
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
    const dialogRef = this.openDialog(CargoSearchDialogComponent);

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.searchModel = result;
          this.load();
        }
      });
  }
}
