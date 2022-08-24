import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [PageLayoutComponent],
})
export class CoreModule {}
