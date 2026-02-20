import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../../interfaces/team.interface';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  @Input() team!: Team;
  @Output() driverSelected = new EventEmitter<string>();

  onDriverClick(driverName: string): void {
    this.driverSelected.emit(driverName);
  }
}
