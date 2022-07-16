import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../shared/material/material.module';
import { PageLayoutComponent } from './page-layout.component';

describe('PageLayoutComponent', () => {
  let component: PageLayoutComponent;
  let fixture: ComponentFixture<PageLayoutComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLayoutComponent],
      imports: [MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageLayoutComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('header', () => {
    it(`should have as title`, () => {
      expect(component.title).toEqual('Travel Tool');
    });

    it('should render title', () => {
      expect(nativeElement.querySelector('.header')?.textContent).toContain(
        'Travel Tool'
      );
    });
  });

  describe('footer', () => {
    it(`should have as author`, () => {
      expect(component.author).toEqual('imprevo');
    });

    it('should render author', () => {
      expect(nativeElement.querySelector('.footer')?.textContent).toContain(
        '© imprevo'
      );
    });
  });
});
