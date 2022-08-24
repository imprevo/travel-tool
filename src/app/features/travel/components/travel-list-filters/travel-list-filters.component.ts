import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TravelStatus } from '../../models/travel.model';

export interface FiltersData {
  search?: string | null;
  status?: TravelStatus | null;
}

@UntilDestroy()
@Component({
  selector: 'app-travel-list-filters',
  templateUrl: './travel-list-filters.component.html',
  styleUrls: ['./travel-list-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelListFiltersComponent implements OnInit {
  @Output()
  filterChanged = new EventEmitter<FiltersData>();

  form = this.fb.group<FiltersData>({
    search: '',
    status: null,
  });

  statusList = [
    { value: TravelStatus.NEW, label: 'New' },
    { value: TravelStatus.COMPLETED, label: 'Completed' },
    { value: TravelStatus.CANCELLED, label: 'Cancelled' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((changes) => {
      this.filterChanged.emit(changes);
    });
  }
}
