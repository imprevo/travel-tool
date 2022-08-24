import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from '../../shared/dialog';
import { MaterialModule } from '../../shared/material';
import { TravelCardComponent } from './components/travel-card/travel-card.component';
import { TravelDetailComponent } from './components/travel-detail/travel-detail.component';
import { TravelListFiltersComponent } from './components/travel-list-filters/travel-list-filters.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';
import { TravelRoutingModule } from './travel-routing.module';

@NgModule({
  declarations: [
    TravelListComponent,
    TravelListFiltersComponent,
    TravelCardComponent,
    TravelDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    DialogModule,
    RouterModule,
  ],
  exports: [TravelRoutingModule],
})
export class TravelModule {}
