import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TravelModel } from '../../models/travel.model';

@Component({
  selector: 'app-travel-card[travel]',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.css'],
})
export class TravelCardComponent {
  @Input()
  travel!: TravelModel;
  @Output()
  editTravel = new EventEmitter<TravelModel>();
  @Output()
  deleteTravel = new EventEmitter<TravelModel>();

  onEdit() {
    this.editTravel.emit(this.travel);
  }

  onDelete() {
    this.deleteTravel.emit(this.travel);
  }
}
