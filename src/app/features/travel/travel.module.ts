import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '../../shared/dialog';
import { MaterialModule } from '../../shared/material';
import { TravelListComponent } from './components/travel-list/travel-list.component';

@NgModule({
  declarations: [TravelListComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, DialogModule],
  exports: [TravelListComponent],
})
export class TravelModule {}
