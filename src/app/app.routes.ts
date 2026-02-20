import { Routes } from '@angular/router';
import { DriversPage } from './pages/drivers/drivers.page';
import { TeamsPage } from './pages/teams/teams.page';

export const routes: Routes = [
  { path: '', redirectTo: 'pilotos', pathMatch: 'full' },
  { path: 'pilotos', component: DriversPage },
  { path: 'equipos', component: TeamsPage }
];
