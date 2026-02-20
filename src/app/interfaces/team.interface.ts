export interface Team {
  id: string;
  name: string;
  color: string;
  logo: string;
  base: string;
  country: string; // ISO Code like 'IT', 'GB', etc.
  teamPrincipal: string;
  powerUnit: string;
  drivers: string[];
  championships: number;
  wins: number;
}
