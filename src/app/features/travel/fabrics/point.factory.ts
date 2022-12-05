import { Injectable } from '@angular/core';
import { PointDTO, PointModel } from '../models/point.model';
import { CoordinateFactory } from './coordinates.factory';

@Injectable({
  providedIn: 'root',
})
export class PointFactory {
  constructor(private coordinateFactory: CoordinateFactory) {}

  toDTO(point: PointModel): PointDTO {
    return {
      name: point.name,
      coordinate: this.coordinateFactory.toDTO(point.coordinate),
    };
  }

  fromDTO(point: PointDTO): PointModel {
    return new PointModel({
      name: point.name,
      coordinate: this.coordinateFactory.fromDTO(point.coordinate),
    });
  }
}
