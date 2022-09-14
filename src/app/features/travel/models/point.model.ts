import { CoordinateDTO, CoordinateModel } from './coordinate.model';

export class PointModel {
  name: string;
  coordinate: CoordinateModel;

  private constructor(point: PointDTO) {
    this.name = point.name;
    this.coordinate = CoordinateModel.fromDTO(point.coordinate);
  }

  static toDTO(point: PointModel): PointDTO {
    return {
      name: point.name,
      coordinate: CoordinateModel.toDTO(point.coordinate),
    };
  }

  static fromDTO(point: PointDTO): PointModel {
    return new PointModel(point);
  }
}

export interface PointDTO {
  readonly name: string;
  readonly coordinate: CoordinateDTO;
}
