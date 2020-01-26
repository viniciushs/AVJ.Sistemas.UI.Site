import { Component, OnInit } from '@angular/core';
import { CargoSearch } from '../../shared/models/cargo-search.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cargo-search-dialog',
  templateUrl: './cargo-search-dialog.component.html',
  styleUrls: ['./cargo-search-dialog.component.scss']
})
export class CargoSearchDialogComponent {

  public model: CargoSearch = new CargoSearch();

  constructor(public dialogRef: MatDialogRef<CargoSearchDialogComponent>) {
  }

  public cancel($event: any): void {
    this.dialogRef.close();
  }
}
