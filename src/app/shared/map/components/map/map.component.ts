import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { LatLngLiteral, LeafletMouseEvent } from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  @Output()
  mapClick = new EventEmitter<LatLngLiteral>();

  @ViewChild('map')
  mapNode?: ElementRef<HTMLElement>;

  constructor(private map: MapService) {}

  ngAfterViewInit() {
    if (this.mapNode) {
      this.map.initMap(this.mapNode.nativeElement);
      this.map.map?.on('click', this.handleClickEvent, this);
    }
  }

  handleClickEvent(event: LeafletMouseEvent) {
    this.mapClick.emit(event.latlng);
  }
}
