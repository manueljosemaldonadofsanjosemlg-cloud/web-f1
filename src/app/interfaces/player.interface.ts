export interface PlayerStats {
  worldChampionships: number;
  wins: number;
  podiums: number;
  points: number;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  teamColor: string;
  number: number;
  country: string;
  image: string;
  position: string;       // e.g., 'Piloto Titular', 'Piloto Reserva', 'Rookie'
  status: 'Disponible' | 'Lesionado' | 'Sancionado';
  stats: PlayerStats;
}
