import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCategoriesFilterComponent } from './box-categories-filter.component';

describe('BoxCategoriesFilterComponent', () => {
  let component: BoxCategoriesFilterComponent;
  let fixture: ComponentFixture<BoxCategoriesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxCategoriesFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCategoriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
