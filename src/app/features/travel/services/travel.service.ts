import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TravelModel, TravelStatus } from '../models/travel.model';
import { TravelDataProviderService } from './travel-data-provider.service';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private data = new BehaviorSubject<TravelModel[]>([]);

  constructor(private travelDataProvider: TravelDataProviderService) {}

  private setData(data: TravelModel[], shouldSave = false) {
    this.data.next(data);
    if (shouldSave) {
      this.saveData();
    }
  }

  private saveData() {
    const data = this.data
      .getValue()
      .map((travel) => TravelModel.toDTO(travel));
    this.travelDataProvider.set(data);
  }

  loadTravels() {
    const data = this.travelDataProvider
      .get()
      .map((travel) => TravelModel.fromDTO(travel));
    this.setData(data);
  }

  getList(
    search?: string | null,
    status?: TravelStatus | null
  ): Observable<TravelModel[]> {
    return this.data.pipe(
      map((data) => {
        let result = data;

        if (status) {
          result = data.filter((travel) => travel.status === status);
        }

        const searchValue = search?.trim();
        if (searchValue) {
          const searchRegExp = new RegExp(searchValue, 'i');
          result = data.filter((travel) => travel.hasContent(searchRegExp));
        }

        return result;
      })
    );
  }

  deleteTravel(id: string) {
    const data = this.data.getValue().filter((travel) => travel.id !== id);
    this.setData(data, true);
  }
}
