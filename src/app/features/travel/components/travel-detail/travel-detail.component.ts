import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, of, switchMap } from 'rxjs';
import { TravelModel } from '../../models/travel.model';
import { TravelService } from '../../services/travel.service';

@UntilDestroy()
@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelDetailComponent implements OnInit {
  travel: TravelModel | null = null;

  routeId$ = this.route.paramMap.pipe(map((params) => params.get('id')));

  constructor(
    private travelService: TravelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeId$
      .pipe(
        switchMap((id) => (id ? this.travelService.getTravel(id) : of(null))),
        untilDestroyed(this)
      )
      .subscribe((travel) => {
        this.travel = travel;
      });
  }
}
