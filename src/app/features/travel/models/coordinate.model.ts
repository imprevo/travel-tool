export class CoordinateModel {
  lat: number;
  lng: number;

  private constructor(coordinate: CoordinateDTO) {
    this.lat = coordinate.lat;
    this.lng = coordinate.lng;
  }

  static toDTO(coordinate: CoordinateModel): CoordinateDTO {
    return {
      lat: coordinate.lat,
      lng: coordinate.lng,
    };
  }

  static fromDTO(coordinate: CoordinateDTO): CoordinateModel {
    return new CoordinateModel(coordinate);
  }
}

export interface CoordinateDTO {
  readonly lat: number;
  readonly lng: number;
}
