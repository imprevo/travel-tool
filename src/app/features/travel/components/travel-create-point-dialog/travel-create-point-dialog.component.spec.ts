import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';
import { CoordinateModel } from '../../models/coordinate.model';
import { TravelModule } from '../../travel.module';
import {
  TravelCreatePointDialogComponent,
  TravelCreatePointDialogData,
} from './travel-create-point-dialog.component';

describe('TravelCreatePointDialogComponent', () => {
  beforeEach(() =>
    MockBuilder(TravelCreatePointDialogComponent, TravelModule)
      .provide(MockProvider(MatDialogRef))
      .provide(
        MockProvider(MAT_DIALOG_DATA, <TravelCreatePointDialogData>{
          coordinate: new CoordinateModel({ lat: 1, lng: 1 }),
        })
      )
  );

  it('should create', () => {
    const fixture = MockRender(TravelCreatePointDialogComponent);

    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
