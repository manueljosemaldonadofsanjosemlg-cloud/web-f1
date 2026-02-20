export interface DriverStats {
  worldChampionships: number;
  wins: number;
  podiums: number;
  points: number; // 2024 season points or career points
}

export interface Driver {
  id: string;
  name: string;
  team: string; // e.g., 'Ferrari', 'Mercedes'
  teamColor: string; // Hex code for team color
  number: number;
  country: string; // ISO code or name for flag
  image: string; // URL to driver image (can use placeholders for now)
  stats: DriverStats;
}
