import { Injectable } from '@angular/core';
import { TravelModel } from '../models/travel';

const fakeData: TravelModel[] = [
  new TravelModel({
    name: 'New York',
    description: 'test',
    createdDate: '2019-1-1',
    updatedDate: '2019-1-1',
  }),
  new TravelModel({
    name: 'Berlin',
    description: 'description',
    createdDate: '2019-5-6',
    updatedDate: '2019-5-6',
  }),
  new TravelModel({
    name: 'Novosibirsk',
    description: '',
    createdDate: '2020-11-10',
    updatedDate: '2020-11-10',
  }),
  new TravelModel({
    name: 'Limassol',
    description: null,
    createdDate: '2021-3-7',
    updatedDate: '2021-3-7',
  }),
  new TravelModel({
    name: 'Birthday',
    description: 'Yep, my birthday plans',
    createdDate: '2022-5-14',
    updatedDate: '2022-5-14',
  }),
  new TravelModel({
    name: 'New year',
    description: 'Let it snow!',
    createdDate: '2022-4-20',
    updatedDate: '2022-4-20',
  }),
  new TravelModel({
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit augue eget ligula facilisis, eget interdum erat dapibus.',
    createdDate: '2022-7-2',
    updatedDate: '2022-7-2',
  }),
];

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private data: TravelModel[] = fakeData;

  getList(search?: string | null) {
    const searchValue = search?.trim();
    if (!searchValue) return this.data;
    const regexp = new RegExp(searchValue, 'i');
    return this.data.filter(
      (travel) => travel.name.match(regexp) || travel.description?.match(regexp)
    );
  }
}
