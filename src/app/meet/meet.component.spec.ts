import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MeetComponent } from './meet.component';

describe('MeetComponent', () => {
  let component: MeetComponent;
  let fixture: ComponentFixture<MeetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
