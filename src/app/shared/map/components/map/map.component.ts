import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MapService],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map')
  mapNode?: ElementRef<HTMLElement>;

  constructor(private map: MapService) {}

  ngAfterViewInit() {
    if (this.mapNode) {
      this.map.initMap(this.mapNode.nativeElement);
    }
  }
}
