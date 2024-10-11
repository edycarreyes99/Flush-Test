import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDropsListComponent } from './recent-drops-list.component';

describe('RecentsDropsListComponent', () => {
  let component: RecentDropsListComponent;
  let fixture: ComponentFixture<RecentDropsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentDropsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentDropsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
