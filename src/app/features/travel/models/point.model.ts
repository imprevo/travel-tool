import { CoordinateDTO, CoordinateModel } from './coordinate.model';

export type PointValue = Pick<PointModel, 'name' | 'coordinate'>;

export class PointModel {
  name: string;
  coordinate: CoordinateModel;

  constructor(point: PointValue) {
    this.name = point.name;
    this.coordinate = point.coordinate;
  }
}

export interface PointDTO {
  readonly name: string;
  readonly coordinate: CoordinateDTO;
}
