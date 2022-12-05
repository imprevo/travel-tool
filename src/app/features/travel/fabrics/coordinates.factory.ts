import { Injectable } from '@angular/core';
import { CoordinateDTO, CoordinateModel } from '../models/coordinate.model';

@Injectable({
  providedIn: 'root',
})
export class CoordinateFactory {
  toDTO(coordinate: CoordinateModel): CoordinateDTO {
    return {
      lat: coordinate.lat,
      lng: coordinate.lng,
    };
  }

  fromDTO(coordinate: CoordinateDTO): CoordinateModel {
    return new CoordinateModel(coordinate);
  }
}
