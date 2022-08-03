import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs';
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
  });

  filters$ = this.searchForm.valueChanges.pipe(
    debounceTime(200),
    startWith(this.searchForm.value)
  );

  travels$ = this.filters$.pipe(
    switchMap((search) => this.travelService.getList(search.search))
  );

  constructor(private fb: FormBuilder, private travelService: TravelService) {}

  ngOnInit() {
    this.travelService.loadTravels();
  }
}
