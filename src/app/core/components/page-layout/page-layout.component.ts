import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {
  title = 'Travel Tool';
  author = 'imprevo';
}
