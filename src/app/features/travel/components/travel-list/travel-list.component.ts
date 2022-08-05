import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs';
import { DialogService } from '../../../../shared/dialog';
import { TravelModel, TravelStatus } from '../../models/travel.model';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelListComponent implements OnInit {
  searchForm = this.fb.group({
    search: '',
    status: <TravelStatus | null>null,
  });

  filters$ = this.searchForm.valueChanges.pipe(
    debounceTime(200),
    startWith(this.searchForm.value)
  );

  travels$ = this.filters$.pipe(
    switchMap((filters) =>
      this.travelService.getList(filters.search, filters.status)
    )
  );

  statusList = [
    { value: TravelStatus.NEW, label: 'New' },
    { value: TravelStatus.COMPLETED, label: 'Completed' },
    { value: TravelStatus.CANCELLED, label: 'Cancelled' },
  ];

  constructor(
    private fb: FormBuilder,
    private travelService: TravelService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.travelService.loadTravels();
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
}
