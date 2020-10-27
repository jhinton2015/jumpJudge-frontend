import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteTableComponent } from './athlete-table.component';

describe('AthleteTableComponent', () => {
  let component: AthleteTableComponent;
  let fixture: ComponentFixture<AthleteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
