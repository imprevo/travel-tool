import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TravelModel } from '../models/travel.model';
import { TravelDataProviderService } from './travel-data-provider.service';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private data = new BehaviorSubject<TravelModel[]>([]);

  constructor(private travelDataProvider: TravelDataProviderService) {}

  loadTravels() {
    const data = this.travelDataProvider
      .get()
      .map((travel) => TravelModel.fromDTO(travel));
    this.data.next(data);
  }

  saveTravels() {
    const data = this.data
      .getValue()
      .map((travel) => TravelModel.toDTO(travel));
    this.travelDataProvider.set(data);
  }

  getList(search?: string | null): Observable<TravelModel[]> {
    const searchValue = search?.trim();
    if (!searchValue) return this.data;
    const searchRegExp = new RegExp(searchValue, 'i');
    return this.data.pipe(
      map((data) => data.filter((travel) => travel.hasContent(searchRegExp)))
    );
  }
}
