import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TeamStanding {
  position: number;
  name: string;
  points: number;
}

@Component({
  selector: 'app-standings-teams',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="standings-container">
      <div class="header">
        <h2>CLASIFICACIÓN <span class="accent">CONSTRUCTORES</span></h2>
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
              <th>ESCUDERÍA</th>
              <th class="pts">PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let team of standings[selectedYear]; let i = index" class="standing-row" [class.world-champion]="team.position === 1">
              <td class="pos">{{ team.position }}</td>
              <td class="team-name">
                {{ team.name }}
                <span *ngIf="team.position === 1" class="crown">🏆</span>
              </td>
              <td class="pts">{{ team.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div *ngIf="!standings[selectedYear] || standings[selectedYear].length === 0" class="no-data">
        <div class="icon">🏗️</div>
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
    .pts { width: 100px; text-align: center; font-weight: 700; }
    
    .standing-row:hover {
      background: rgba(255,255,255,0.03);
    }

    .world-champion {
      background: rgba(255, 215, 0, 0.05);
    }
    .world-champion .pos {
      color: #FFD700;
    }
    .crown {
      margin-left: 0.5rem;
      font-size: 1.1rem;
    }
    
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
export class StandingsTeams implements OnInit {
  years = [2022, 2023, 2024, 2025, 2026];
  selectedYear = 2025;
  
  standings: { [year: number]: TeamStanding[] } = {
    2022: [
      { position: 1, name: 'Red Bull Racing', points: 759 },
      { position: 2, name: 'Ferrari', points: 554 },
      { position: 3, name: 'Mercedes', points: 515 },
      { position: 4, name: 'Alpine', points: 173 },
      { position: 5, name: 'McLaren', points: 159 },
      { position: 6, name: 'Alfa Romeo', points: 55 },
      { position: 7, name: 'Aston Martin', points: 55 },
      { position: 8, name: 'Haas', points: 37 },
      { position: 9, name: 'AlphaTauri', points: 35 },
      { position: 10, name: 'Williams', points: 8 }
    ],
    2023: [
      { position: 1, name: 'Red Bull Racing', points: 860 },
      { position: 2, name: 'Mercedes', points: 409 },
      { position: 3, name: 'Ferrari', points: 406 },
      { position: 4, name: 'McLaren', points: 302 },
      { position: 5, name: 'Aston Martin', points: 280 },
      { position: 6, name: 'Alpine', points: 120 },
      { position: 7, name: 'Williams', points: 28 },
      { position: 8, name: 'AlphaTauri', points: 25 },
      { position: 9, name: 'Alfa Romeo', points: 16 },
      { position: 10, name: 'Haas', points: 12 }
    ],
    2024: [
      { position: 1, name: 'McLaren', points: 666 },
      { position: 2, name: 'Ferrari', points: 652 },
      { position: 3, name: 'Red Bull Racing', points: 589 },
      { position: 4, name: 'Mercedes', points: 445 },
      { position: 5, name: 'Aston Martin', points: 94 },
      { position: 6, name: 'Alpine', points: 65 },
      { position: 7, name: 'Haas', points: 58 },
      { position: 8, name: 'Racing Bulls', points: 46 },
      { position: 9, name: 'Williams', points: 17 },
      { position: 10, name: 'Sauber', points: 0 }
    ],
    2025: [
      { position: 1, name: 'McLaren', points: 833 },
      { position: 2, name: 'Mercedes', points: 469 },
      { position: 3, name: 'Red Bull Racing', points: 451 },
      { position: 4, name: 'Ferrari', points: 398 },
      { position: 5, name: 'Williams', points: 137 },
      { position: 6, name: 'Racing Bulls', points: 92 },
      { position: 7, name: 'Aston Martin', points: 90 },
      { position: 8, name: 'Haas', points: 80 },
      { position: 9, name: 'Alpine', points: 73 },
      { position: 10, name: 'Sauber', points: 4 }
    ],
    2026: [] 
  };

  ngOnInit(): void {}
}
