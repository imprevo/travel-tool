import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MapService } from '../../../../shared/map/services/map.service';
import { PointFactory } from '../../fabrics/point.factory';
import { CoordinateDTO } from '../../models/coordinate.model';
import { PointModel } from '../../models/point.model';
import { TravelCreatePointDialogService } from '../travel-create-point-dialog/travel-create-point-dialog.service';

@Component({
  selector: 'app-travel-routes',
  templateUrl: './travel-routes.component.html',
  styleUrls: ['./travel-routes.component.css'],
  providers: [MapService],
})
export class TravelRoutesComponent {
  points: PointModel[] = [
    this.pointFactory.fromDTO({
      name: 'test 0',
      coordinate: { lat: 0, lng: 0 },
    }),
    this.pointFactory.fromDTO({
      name: 'test 1',
      coordinate: { lat: 1, lng: 1 },
    }),
    this.pointFactory.fromDTO({
      name: 'test 2',
      coordinate: { lat: 2, lng: 2 },
    }),
    this.pointFactory.fromDTO({
      name: 'test 3',
      coordinate: { lat: 3, lng: 3 },
    }),
    this.pointFactory.fromDTO({
      name: 'test 4',
      coordinate: { lat: 4, lng: 4 },
    }),
  ];

  constructor(
    private cd: ChangeDetectorRef,
    private createPointDialog: TravelCreatePointDialogService,
    private pointFactory: PointFactory
  ) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.points, event.previousIndex, event.currentIndex);
  }

  addPoint(point: PointModel) {
    this.points.push(point);
  }

  deletePoint(index: number) {
    this.points.splice(index, 1);
  }

  mapClick(coordinate: CoordinateDTO) {
    this.createPointDialog.open(coordinate).subscribe((point) => {
      if (point) {
        this.addPoint(point);
        this.cd.markForCheck();
      }
    });
  }
}
