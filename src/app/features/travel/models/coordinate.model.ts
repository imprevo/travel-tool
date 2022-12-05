export type CoordinateValue = Pick<CoordinateModel, 'lat' | 'lng'>;

export class CoordinateModel {
  lat: number;
  lng: number;

  constructor(coordinate: CoordinateValue) {
    this.lat = coordinate.lat;
    this.lng = coordinate.lng;
  }
}

export interface CoordinateDTO {
  readonly lat: number;
  readonly lng: number;
}
