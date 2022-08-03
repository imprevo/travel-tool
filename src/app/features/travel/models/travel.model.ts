export class TravelModel {
  id: string;
  name: string;
  description: string | null;
  createdDate: Date;
  updatedDate: Date;

  private constructor(travel: TravelDTO) {
    this.id = travel.id;
    this.name = travel.name;
    this.description = travel.description;
    this.createdDate = new Date(travel.createdDate);
    this.updatedDate = new Date(travel.updatedDate);
  }

  static toDTO(travel: TravelModel): TravelDTO {
    return {
      id: travel.id,
      name: travel.name,
      description: travel.description,
      createdDate: travel.createdDate.toISOString(),
      updatedDate: travel.updatedDate.toISOString(),
    };
  }

  static fromDTO(travel: TravelDTO): TravelModel {
    return new TravelModel(travel);
  }

  hasContent(search: RegExp): boolean {
    if (search.test(this.name)) return true;
    return this.description ? search.test(this.description) : false;
  }
}

export interface TravelDTO {
  id: string;
  name: string;
  description: string | null;
  createdDate: string;
  updatedDate: string;
}
