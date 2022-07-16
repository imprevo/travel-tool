import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, map, startWith } from 'rxjs';
import { TravelModel } from '../../models/travel';
import { TravelService } from '../../services/travel.service';

@UntilDestroy()
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  travels: TravelModel[] = [];

  searchForm = this.fb.group({
    search: '',
  });

  constructor(private fb: FormBuilder, private travel: TravelService) {}

  ngOnInit() {
    const search$ = this.searchForm.valueChanges.pipe(
      debounceTime(200),
      startWith(this.searchForm.value)
    );
    const travels$ = search$.pipe(
      map((search) => this.travel.getList(search.search))
    );

    travels$.pipe(untilDestroyed(this)).subscribe((travels) => {
      this.travels = travels;
    });
  }
}
