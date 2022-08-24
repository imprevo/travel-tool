import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, startWith, switchMap } from 'rxjs';
import { DialogService } from '../../../../shared/dialog';
import { TravelModel } from '../../models/travel.model';
import { TravelService } from '../../services/travel.service';
import { FiltersData } from '../travel-list-filters/travel-list-filters.component';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelListComponent {
  filtersData$ = new BehaviorSubject<FiltersData>({
    search: '',
    status: null,
  });

  filters$ = this.filtersData$.pipe(
    debounceTime(200),
    startWith(this.filtersData$.value)
  );

  travels$ = this.filters$.pipe(
    switchMap((filters) =>
      this.travelService.getList(filters.search, filters.status)
    )
  );

  constructor(
    private travelService: TravelService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  filterChanged(data: FiltersData) {
    this.filtersData$.next(data);
  }

  deleteTravel(travel: TravelModel) {
    this.dialogService
      .confirm(
        'Confirm deleting',
        `Are you sure you want to delete ${travel.name}?`
      )
      .subscribe((result) => {
        if (result) {
          this.travelService.deleteTravel(travel.id);
        }
      });
  }

  editTravel(travel: TravelModel) {
    // TODO: replace with link
    this.router.navigate(['travels', travel.id]);
  }
}
