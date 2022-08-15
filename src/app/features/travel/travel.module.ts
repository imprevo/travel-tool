import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '../../shared/dialog';
import { MaterialModule } from '../../shared/material';
import { TravelCardComponent } from './components/travel-card/travel-card.component';
import { TravelListFiltersComponent } from './components/travel-list-filters/travel-list-filters.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';

@NgModule({
  declarations: [
    TravelListComponent,
    TravelListFiltersComponent,
    TravelCardComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, DialogModule],
  exports: [TravelListComponent],
})
export class TravelModule {}
