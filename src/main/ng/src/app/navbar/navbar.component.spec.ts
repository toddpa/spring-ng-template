import { TestBed, async } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarRoutingModule } from './navbar-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

describe('NavBarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        RouterTestingModule,
        NgbModule.forRoot(),
        NavbarRoutingModule
      ],
    }).compileComponents();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Maths App');
  }));

  it('should render nav in navbar', async(() => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Maths App');
  }));
});
