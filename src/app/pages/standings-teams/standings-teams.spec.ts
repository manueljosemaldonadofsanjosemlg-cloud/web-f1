import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsTeams } from './standings-teams';

describe('StandingsTeams', () => {
  let component: StandingsTeams;
  let fixture: ComponentFixture<StandingsTeams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingsTeams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingsTeams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
