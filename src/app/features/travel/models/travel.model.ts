export enum TravelStatus {
  NEW = 'new',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export type TravelValue = Pick<
  TravelModel,
  'id' | 'name' | 'description' | 'createdDate' | 'updatedDate' | 'status'
>;

export class TravelModel {
  id: string;
  name: string;
  description: string | null;
  createdDate: Date;
  updatedDate: Date;
  status: TravelStatus;

  constructor(travel: TravelValue) {
    this.id = travel.id;
    this.name = travel.name;
    this.description = travel.description;
    this.createdDate = travel.createdDate;
    this.updatedDate = travel.updatedDate;
    this.status = travel.status;
  }

  hasContent(search: RegExp): boolean {
    if (search.test(this.name)) return true;
    return this.description ? search.test(this.description) : false;
  }
}

export interface TravelDTO {
  readonly id: string;
  readonly name: string;
  readonly description: string | null;
  readonly createdDate: string;
  readonly updatedDate: string;
  readonly status: string;
}
