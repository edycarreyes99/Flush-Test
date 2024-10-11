import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesListComponent } from './boxes-list.component';

describe('BoxesComponent', () => {
  let component: BoxesListComponent;
  let fixture: ComponentFixture<BoxesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
