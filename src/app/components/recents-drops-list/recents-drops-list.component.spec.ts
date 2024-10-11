import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsDropsListComponent } from './recents-drops-list.component';

describe('RecentsDropsListComponent', () => {
  let component: RecentsDropsListComponent;
  let fixture: ComponentFixture<RecentsDropsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentsDropsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentsDropsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
