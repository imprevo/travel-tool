import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule],
  exports: [MapComponent],
})
export class MapModule {}
