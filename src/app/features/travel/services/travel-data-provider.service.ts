import { Injectable } from '@angular/core';
import { LocalStorageClient } from '../../../shared/adapters';
import { TravelDTO, TravelStatus } from '../models/travel.model';

const fakeData: TravelDTO[] = [
  {
    id: '1',
    name: 'New York',
    description: 'test',
    createdDate: '2019-1-1',
    updatedDate: '2019-1-1',
    status: TravelStatus.COMPLETED,
  },
  {
    id: '2',
    name: 'Berlin',
    description: 'description',
    createdDate: '2019-5-6',
    updatedDate: '2019-5-6',
    status: TravelStatus.COMPLETED,
  },
  {
    id: '3',
    name: 'Novosibirsk',
    description: '',
    createdDate: '2020-11-10',
    updatedDate: '2020-11-10',
    status: TravelStatus.CANCELLED,
  },
  {
    id: '4',
    name: 'Limassol',
    description: null,
    createdDate: '2021-3-7',
    updatedDate: '2021-3-7',
    status: TravelStatus.COMPLETED,
  },
  {
    id: '5',
    name: 'Birthday',
    description: 'Yep, my birthday plans',
    createdDate: '2022-5-14',
    updatedDate: '2022-5-14',
    status: TravelStatus.NEW,
  },
  {
    id: '6',
    name: 'New year',
    description: 'Let it snow!',
    createdDate: '2022-4-20',
    updatedDate: '2022-4-20',
    status: TravelStatus.CANCELLED,
  },
  {
    id: '7',
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit augue eget ligula facilisis, eget interdum erat dapibus.',
    createdDate: '2022-7-2',
    updatedDate: '2022-7-2',
    status: TravelStatus.NEW,
  },
];

@Injectable({
  providedIn: 'root',
})
export class TravelDataProviderService {
  private lsKey = 'travel-data';

  constructor(private ls: LocalStorageClient) {}

  get(): TravelDTO[] {
    return this.ls.get<TravelDTO[]>(this.lsKey) || fakeData;
  }

  set(travels: TravelDTO[]) {
    this.ls.set(this.lsKey, travels);
  }
}
