import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FootersComponent } from './shared/footers/footers.component';
import { HeadersComponent } from './shared/headers/headers.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeadersComponent,
        FootersComponent,
        RecipesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RecpieBook'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RecpieBook');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('RecpieBook app is running!');
  });
});
