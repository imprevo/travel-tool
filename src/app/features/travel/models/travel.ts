export class TravelModel {
  name: string;
  description: string | null;
  createdDate: Date;
  updatedDate: Date;

  constructor(travel: TravelDTO) {
    this.name = travel.name;
    this.description = travel.description;
    this.createdDate = new Date(travel.createdDate);
    this.updatedDate = new Date(travel.updatedDate);
  }
}

export interface TravelDTO {
  name: string;
  description: string | null;
  createdDate: string;
  updatedDate: string;
}
