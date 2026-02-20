import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DriverStanding {
  position: number;
  name: string;
  team: string;
  points: number;
}

@Component({
  selector: 'app-standings-drivers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="standings-container">
      <div class="header">
        <h2>CLASIFICACIÓN <span class="accent">PILOTOS</span></h2>
        <div class="year-selector">
          <label for="year">Temporada:</label>
          <select id="year" [(ngModel)]="selectedYear">
            <option *ngFor="let year of years" [value]="year">{{ year }}</option>
          </select>
        </div>
      </div>

      <div class="standings-table-wrapper">
        <table class="standings-table">
          <thead>
            <tr>
              <th class="pos">POS</th>
              <th>PILOTO</th>
              <th>ESCUDERÍA</th>
              <th class="pts">PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let driver of standings[selectedYear]; let i = index" class="standing-row" [class.world-champion]="driver.position === 1">
              <td class="pos">{{ driver.position }}</td>
              <td class="driver-name">
                {{ driver.name }}
                <span *ngIf="driver.position === 1" class="crown">👑</span>
              </td>
              <td class="team-name">{{ driver.team }}</td>
              <td class="pts">{{ driver.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div *ngIf="!standings[selectedYear] || standings[selectedYear].length === 0" class="no-data">
        <div class="icon">🏁</div>
        <p>La temporada {{ selectedYear }} aún no ha comenzado.</p>
        <span>Las clasificaciones se actualizarán tras el primer Gran Premio.</span>
      </div>
    </div>
  `,
  styles: [`
    .standings-container {
      padding: 1rem;
      animation: fadeIn 0.5s ease;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    h2 {
      font-family: var(--font-display);
      font-size: 2rem;
      letter-spacing: 2px;
      margin: 0;
    }
    .accent { color: var(--f1-red); }
    
    .year-selector {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    select {
      background: var(--f1-carbon-light);
      color: white;
      border: 1px solid var(--f1-border);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      outline: none;
      font-weight: 600;
      cursor: pointer;
    }

    .standings-table-wrapper {
      background: var(--f1-surface);
      border-radius: var(--radius-md);
      overflow: hidden;
      border: 1px solid var(--f1-border);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    .standings-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }
    th {
      background: var(--f1-carbon);
      padding: 1rem;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--f1-gray-400);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    td {
      padding: 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-size: 0.9rem;
    }
    .pos { width: 60px; text-align: center; font-weight: 700; color: var(--f1-red); }
    .pts { width: 80px; text-align: center; font-weight: 700; }
    
    .standing-row:hover {
      background: rgba(255,255,255,0.03);
    }

    .world-champion { background: rgba(255, 215, 0, 0.05); }
    .world-champion .pos { color: #FFD700; }
    .crown { margin-left: 0.5rem; font-size: 1.1rem; }
    
    .no-data {
      text-align: center;
      padding: 4rem 2rem;
      background: var(--f1-surface);
      border-radius: var(--radius-md);
      border: 1px dashed var(--f1-border);
      margin-top: 1rem;
    }
    .no-data .icon { font-size: 3rem; margin-bottom: 1rem; }
    .no-data p { font-size: 1.2rem; font-weight: 600; margin: 0 0 0.5rem; }
    .no-data span { color: var(--f1-gray-400); font-size: 0.9rem; }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
})
export class StandingsDrivers implements OnInit {
  years = [2022, 2023, 2024, 2025, 2026];
  selectedYear = 2025;
  
  standings: { [year: number]: DriverStanding[] } = {
    2022: [
      { position: 1, name: 'Max Verstappen', team: 'Red Bull Racing', points: 454 },
      { position: 2, name: 'Charles Leclerc', team: 'Ferrari', points: 308 },
      { position: 3, name: 'Sergio Perez', team: 'Red Bull Racing', points: 305 },
      { position: 4, name: 'George Russell', team: 'Mercedes', points: 275 },
      { position: 5, name: 'Carlos Sainz', team: 'Ferrari', points: 246 },
      { position: 6, name: 'Lewis Hamilton', team: 'Mercedes', points: 240 },
      { position: 7, name: 'Lando Norris', team: 'McLaren', points: 122 },
      { position: 8, name: 'Esteban Ocon', team: 'Alpine', points: 92 },
      { position: 9, name: 'Fernando Alonso', team: 'Alpine', points: 81 },
      { position: 10, name: 'Valtteri Bottas', team: 'Alfa Romeo', points: 49 },
      { position: 11, name: 'Daniel Ricciardo', team: 'McLaren', points: 37 },
      { position: 12, name: 'Sebastian Vettel', team: 'Aston Martin', points: 37 },
      { position: 13, name: 'Kevin Magnussen', team: 'Haas', points: 25 },
      { position: 14, name: 'Pierre Gasly', team: 'AlphaTauri', points: 23 },
      { position: 15, name: 'Lance Stroll', team: 'Aston Martin', points: 18 },
      { position: 16, name: 'Mick Schumacher', team: 'Haas', points: 12 },
      { position: 17, name: 'Yuki Tsunoda', team: 'AlphaTauri', points: 12 },
      { position: 18, name: 'Zhou Guanyu', team: 'Alfa Romeo', points: 6 },
      { position: 19, name: 'Alexander Albon', team: 'Williams', points: 4 },
      { position: 20, name: 'Nicholas Latifi', team: 'Williams', points: 2 },
      { position: 21, name: 'Nyck De Vries', team: 'Williams', points: 2 },
      { position: 22, name: 'Nico Hulkenberg', team: 'Aston Martin', points: 0 }
    ],
    2023: [
      { position: 1, name: 'Max Verstappen', team: 'Red Bull Racing', points: 575 },
      { position: 2, name: 'Sergio Perez', team: 'Red Bull Racing', points: 285 },
      { position: 3, name: 'Lewis Hamilton', team: 'Mercedes', points: 234 },
      { position: 4, name: 'Fernando Alonso', team: 'Aston Martin', points: 206 },
      { position: 5, name: 'Charles Leclerc', team: 'Ferrari', points: 206 },
      { position: 6, name: 'Lando Norris', team: 'McLaren', points: 205 },
      { position: 7, name: 'Carlos Sainz', team: 'Ferrari', points: 200 },
      { position: 8, name: 'George Russell', team: 'Mercedes', points: 175 },
      { position: 9, name: 'Oscar Piastri', team: 'McLaren', points: 97 },
      { position: 10, name: 'Lance Stroll', team: 'Aston Martin', points: 74 },
      { position: 11, name: 'Pierre Gasly', team: 'Alpine', points: 62 },
      { position: 12, name: 'Esteban Ocon', team: 'Alpine', points: 58 },
      { position: 13, name: 'Alexander Albon', team: 'Williams', points: 27 },
      { position: 14, name: 'Yuki Tsunoda', team: 'AlphaTauri', points: 17 },
      { position: 15, name: 'Valtteri Bottas', team: 'Alfa Romeo', points: 10 },
      { position: 16, name: 'Nico Hulkenberg', team: 'Haas', points: 9 },
      { position: 17, name: 'Daniel Ricciardo', team: 'AlphaTauri', points: 6 },
      { position: 18, name: 'Zhou Guanyu', team: 'Alfa Romeo', points: 6 },
      { position: 19, name: 'Kevin Magnussen', team: 'Haas', points: 3 },
      { position: 20, name: 'Liam Lawson', team: 'AlphaTauri', points: 2 },
      { position: 21, name: 'Logan Sargeant', team: 'Williams', points: 1 },
      { position: 22, name: 'Nyck de Vries', team: 'AlphaTauri', points: 0 }
    ],
    2024: [
      { position: 1, name: 'Max Verstappen', team: 'Red Bull Racing', points: 437 },
      { position: 2, name: 'Lando Norris', team: 'McLaren', points: 374 },
      { position: 3, name: 'Charles Leclerc', team: 'Ferrari', points: 356 },
      { position: 4, name: 'Oscar Piastri', team: 'McLaren', points: 292 },
      { position: 5, name: 'Carlos Sainz', team: 'Ferrari', points: 290 },
      { position: 6, name: 'George Russell', team: 'Mercedes', points: 245 },
      { position: 7, name: 'Lewis Hamilton', team: 'Mercedes', points: 223 },
      { position: 8, name: 'Sergio Perez', team: 'Red Bull Racing', points: 152 },
      { position: 9, name: 'Fernando Alonso', team: 'Aston Martin', points: 70 },
      { position: 10, name: 'Nico Hulkenberg', team: 'Haas', points: 41 },
      { position: 11, name: 'Pierre Gasly', team: 'Alpine', points: 42 },
      { position: 12, name: 'Yuki Tsunoda', team: 'Racing Bulls', points: 30 },
      { position: 13, name: 'Lance Stroll', team: 'Aston Martin', points: 24 },
      { position: 14, name: 'Esteban Ocon', team: 'Alpine', points: 23 },
      { position: 15, name: 'Kevin Magnussen', team: 'Haas', points: 16 },
      { position: 16, name: 'Alexander Albon', team: 'Williams', points: 12 },
      { position: 17, name: 'Daniel Ricciardo', team: 'Racing Bulls', points: 12 },
      { position: 18, name: 'Oliver Bearman', team: 'Ferrari/Haas', points: 7 },
      { position: 19, name: 'Franco Colapinto', team: 'Williams', points: 5 },
      { position: 20, name: 'Zhou Guanyu', team: 'Sauber', points: 4 },
      { position: 21, name: 'Liam Lawson', team: 'Racing Bulls', points: 4 },
      { position: 22, name: 'Valtteri Bottas', team: 'Sauber', points: 0 },
      { position: 23, name: 'Logan Sargeant', team: 'Williams', points: 0 }
    ],
    2025: [
      { position: 1, name: 'Lando Norris', team: 'McLaren', points: 423 },
      { position: 2, name: 'Max Verstappen', team: 'Red Bull Racing', points: 421 },
      { position: 3, name: 'Oscar Piastri', team: 'McLaren', points: 410 },
      { position: 4, name: 'George Russell', team: 'Mercedes', points: 319 },
      { position: 5, name: 'Charles Leclerc', team: 'Ferrari', points: 242 },
      { position: 6, name: 'Lewis Hamilton', team: 'Ferrari', points: 156 },
      { position: 7, name: 'Kimi Antonelli', team: 'Mercedes', points: 150 },
      { position: 8, name: 'Alexander Albon', team: 'Williams', points: 73 },
      { position: 9, name: 'Carlos Sainz', team: 'Williams', points: 64 },
      { position: 10, name: 'Fernando Alonso', team: 'Aston Martin', points: 56 },
      { position: 11, name: 'Pierre Gasly', team: 'Alpine', points: 42 },
      { position: 12, name: 'Franco Colapinto', team: 'Alpine', points: 31 },
      { position: 13, name: 'Liam Lawson', team: 'Racing Bulls', points: 24 },
      { position: 14, name: 'Nico Hulkenberg', team: 'Audi', points: 22 },
      { position: 15, name: 'Gabriel Bortoleto', team: 'Audi', points: 18 },
      { position: 16, name: 'Oliver Bearman', team: 'Haas', points: 15 },
      { position: 17, name: 'Esteban Ocon', team: 'Haas', points: 12 },
      { position: 18, name: 'Lance Stroll', team: 'Aston Martin', points: 8 },
      { position: 19, name: 'Isack Hadjar', team: 'Red Bull Racing', points: 4 },
      { position: 20, name: 'Sergio Perez', team: 'Cadillac', points: 2 },
      { position: 21, name: 'Valtteri Bottas', team: 'Cadillac', points: 1 },
      { position: 22, name: 'Arvid Lindblad', team: 'Racing Bulls', points: 0 }
    ],
    2026: [
      { position: 1, name: 'Charles Leclerc', team: 'Ferrari', points: 0 },
      { position: 2, name: 'Lewis Hamilton', team: 'Ferrari', points: 0 },
      { position: 3, name: 'Lando Norris', team: 'McLaren', points: 0 },
      { position: 4, name: 'Oscar Piastri', team: 'McLaren', points: 0 },
      { position: 5, name: 'Max Verstappen', team: 'Red Bull Racing', points: 0 },
      { position: 6, name: 'Isack Hadjar', team: 'Red Bull Racing', points: 0 },
      { position: 7, name: 'George Russell', team: 'Mercedes', points: 0 },
      { position: 8, name: 'Kimi Antonelli', team: 'Mercedes', points: 0 },
      { position: 9, name: 'Fernando Alonso', team: 'Aston Martin', points: 0 },
      { position: 10, name: 'Lance Stroll', team: 'Aston Martin', points: 0 },
      { position: 11, name: 'Pierre Gasly', team: 'Alpine', points: 0 },
      { position: 12, name: 'Franco Colapinto', team: 'Alpine', points: 0 },
      { position: 13, name: 'Alexander Albon', team: 'Williams', points: 0 },
      { position: 14, name: 'Carlos Sainz', team: 'Williams', points: 0 },
      { position: 15, name: 'Liam Lawson', team: 'Racing Bulls', points: 0 },
      { position: 16, name: 'Arvid Lindblad', team: 'Racing Bulls', points: 0 },
      { position: 17, name: 'Nico Hulkenberg', team: 'Audi', points: 0 },
      { position: 18, name: 'Gabriel Bortoleto', team: 'Audi', points: 0 },
      { position: 19, name: 'Esteban Ocon', team: 'Haas', points: 0 },
      { position: 20, name: 'Oliver Bearman', team: 'Haas', points: 0 },
      { position: 21, name: 'Sergio Perez', team: 'Cadillac', points: 0 },
      { position: 22, name: 'Valtteri Bottas', team: 'Cadillac', points: 0 }
    ]
  };

  ngOnInit(): void {}
}
