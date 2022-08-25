import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable()
export class MapService {
  map?: L.Map;

  initMap(mapNode: HTMLElement) {
    this.map = L.map(mapNode, {
      center: [0, 0],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }
}
