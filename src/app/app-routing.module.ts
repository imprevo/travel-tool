import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelListComponent } from './features/travel/components/travel-list/travel-list.component';

// TODO: replace with travel routing module
const routes: Routes = [{ path: '', component: TravelListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
