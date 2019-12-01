import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRandomRecipeComponent } from './show-random-recipe.component';

describe('ShowRandomRecipeComponent', () => {
  let component: ShowRandomRecipeComponent;
  let fixture: ComponentFixture<ShowRandomRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRandomRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRandomRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
