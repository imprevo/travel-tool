import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { CoreModule } from '../../core.module';
import { PageLayoutComponent } from './page-layout.component';

describe('PageLayoutComponent', () => {
  beforeEach(() => MockBuilder(PageLayoutComponent, CoreModule));

  it('should create', () => {
    const fixture = MockRender(PageLayoutComponent);

    expect(fixture.point.componentInstance).toBeTruthy();
  });

  describe('header', () => {
    it('should render title', () => {
      MockRender(PageLayoutComponent);
      const header = ngMocks.find('.header');

      expect(ngMocks.formatText(header)).toContain('Travel Tool');
    });
  });

  describe('footer', () => {
    it('should render author', () => {
      MockRender(PageLayoutComponent);
      const footer = ngMocks.find('.footer');

      expect(ngMocks.formatText(footer)).toContain('© imprevo');
    });
  });
});
