import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { TravelListComponent } from './components/travel-list/travel-list.component';

@NgModule({
  declarations: [TravelListComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [TravelListComponent],
})
export class TravelModule {}
