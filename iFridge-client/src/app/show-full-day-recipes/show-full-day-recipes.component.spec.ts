import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFullDayRecipesComponent } from './show-full-day-recipes.component';

describe('ShowFullDayRecipesComponent', () => {
  let component: ShowFullDayRecipesComponent;
  let fixture: ComponentFixture<ShowFullDayRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFullDayRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFullDayRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
