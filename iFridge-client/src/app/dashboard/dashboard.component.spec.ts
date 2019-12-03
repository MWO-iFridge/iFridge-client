import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { AddNewIngredientComponent } from '../add-new-ingredient/add-new-ingredient.component';
import { ListManagerComponent } from '../list-manager/list-manager.component';

describe('DashboardComponent', () => {
     let component: DashboardComponent;
     let fixture: ComponentFixture<ListManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DashboardComponent,
        AddNewIngredientComponent
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
      fixture = TestBed.createComponent(IngredientsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddNewIngredientComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'iFridge-client'`, () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('iFridge-client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('iFridge-client app is running!');
  });
});
