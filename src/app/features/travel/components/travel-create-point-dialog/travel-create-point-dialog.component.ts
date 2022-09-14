import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoordinateModel } from '../../models/coordinate.model';
import { PointModel } from '../../models/point.model';

export interface TravelCreatePointDialogData {
  coordinate: CoordinateModel;
}

@Component({
  selector: 'app-travel-create-point-dialog',
  templateUrl: './travel-create-point-dialog.component.html',
  styleUrls: ['./travel-create-point-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelCreatePointDialogComponent {
  form = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TravelCreatePointDialogData,
    public dialogRef: MatDialogRef<
      TravelCreatePointDialogComponent,
      PointModel
    >,
    private fb: FormBuilder
  ) {}

  submit() {
    if (!this.form.valid) return;

    const point = PointModel.fromDTO({
      name: this.form.value.name!,
      coordinate: this.data.coordinate,
    });

    this.dialogRef.close(point);
  }
}
