import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyMessageItemComponent } from './buddy-message-item.component';

describe('BuddyMessageItemComponent', () => {
  let component: BuddyMessageItemComponent;
  let fixture: ComponentFixture<BuddyMessageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuddyMessageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuddyMessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
