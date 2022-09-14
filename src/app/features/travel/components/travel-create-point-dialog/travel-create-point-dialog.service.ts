import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoordinateModel } from '../../models/coordinate.model';
import { PointModel } from '../../models/point.model';
import {
  TravelCreatePointDialogComponent,
  TravelCreatePointDialogData,
} from './travel-create-point-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class TravelCreatePointDialogService {
  constructor(private dialog: MatDialog) {}

  open(coordinate: CoordinateModel) {
    const dialogRef = this.dialog.open<
      TravelCreatePointDialogComponent,
      TravelCreatePointDialogData,
      PointModel
    >(TravelCreatePointDialogComponent, {
      data: { coordinate },
      width: '450px',
    });

    return dialogRef.afterClosed();
  }
}
