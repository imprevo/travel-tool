import { DialogModule } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockBuilder, MockProvider, MockRender, ngMocks } from 'ng-mocks';
import { MaterialModule } from '../../../material';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  beforeEach(() =>
    MockBuilder(ConfirmDialogComponent, DialogModule)
      .mock(MaterialModule, { export: true })
      .provide(
        MockProvider(MAT_DIALOG_DATA, <ConfirmDialogData>{
          title: 'Dialog title',
          message: 'Dialog message',
        })
      )
  );

  it('should create', () => {
    const fixture = MockRender(ConfirmDialogComponent);

    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should contain title', () => {
    MockRender(ConfirmDialogComponent);
    const title = ngMocks.find('.title');

    expect(ngMocks.formatText(title)).toEqual('Dialog title');
  });

  it('should contain message', () => {
    MockRender(ConfirmDialogComponent);
    const message = ngMocks.find('.content');

    expect(ngMocks.formatText(message)).toEqual('Dialog message');
  });
});
