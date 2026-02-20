import { Routes } from '@angular/router';
import { DriversPage } from './pages/drivers/drivers.page';
import { TeamsPage } from './pages/teams/teams.page';
import { StandingsDrivers } from './pages/standings-drivers/standings-drivers';
import { StandingsTeams } from './pages/standings-teams/standings-teams';

export const routes: Routes = [
  { path: '', redirectTo: 'pilotos', pathMatch: 'full' },
  { path: 'pilotos', component: DriversPage },
  { path: 'equipos', component: TeamsPage },
  { path: 'clasificacion-pilotos', component: StandingsDrivers },
  { path: 'clasificacion-constructores', component: StandingsTeams }
];
