import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsDrivers } from './standings-drivers';

describe('StandingsDrivers', () => {
  let component: StandingsDrivers;
  let fixture: ComponentFixture<StandingsDrivers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingsDrivers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingsDrivers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
