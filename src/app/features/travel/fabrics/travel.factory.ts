import { Injectable } from '@angular/core';
import { convertStringToEnum } from '../../../shared/utils/enums';
import { TravelDTO, TravelModel, TravelStatus } from '../models/travel.model';

@Injectable({
  providedIn: 'root',
})
export class TravelFactory {
  toDTO(travel: TravelModel): TravelDTO {
    return {
      id: travel.id,
      name: travel.name,
      description: travel.description,
      createdDate: travel.createdDate.toISOString(),
      updatedDate: travel.updatedDate.toISOString(),
      status: travel.status,
    };
  }

  fromDTO(travel: TravelDTO): TravelModel {
    return new TravelModel({
      id: travel.id,
      name: travel.name,
      description: travel.description,
      createdDate: new Date(travel.createdDate),
      updatedDate: new Date(travel.updatedDate),
      status:
        convertStringToEnum(TravelStatus, travel.status) ?? TravelStatus.NEW,
    });
  }
}
