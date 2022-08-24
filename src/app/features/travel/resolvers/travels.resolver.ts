import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TravelService } from '../services/travel.service';

@Injectable({
  providedIn: 'root',
})
export class TravelsResolver implements Resolve<boolean> {
  constructor(private travelService: TravelService) {}

  resolve(): Observable<boolean> {
    this.travelService.loadTravels();
    return of(true);
  }
}
