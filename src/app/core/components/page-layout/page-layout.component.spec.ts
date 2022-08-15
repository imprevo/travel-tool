import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageLayoutComponent } from './page-layout.component';

describe('PageLayoutComponent', () => {
  let component: PageLayoutComponent;
  let fixture: ComponentFixture<PageLayoutComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLayoutComponent],
      schemas: [NO_ERRORS_SCHEMA],
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
      const header = nativeElement.querySelector('.header');
      expect(header?.textContent).toContain('Travel Tool');
    });
  });

  describe('footer', () => {
    it(`should have as author`, () => {
      expect(component.author).toEqual('imprevo');
    });

    it('should render author', () => {
      const footer = nativeElement.querySelector('.footer');
      expect(footer?.textContent).toContain('© imprevo');
    });
  });
});
