import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelDetailComponent } from './components/travel-detail/travel-detail.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';
import { TravelsResolver } from './resolvers/travels.resolver';

const routes: Routes = [
  {
    path: 'travels',
    resolve: { preload: TravelsResolver },
    children: [
      { path: '', component: TravelListComponent },
      { path: ':id', component: TravelDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TravelRoutingModule {}
