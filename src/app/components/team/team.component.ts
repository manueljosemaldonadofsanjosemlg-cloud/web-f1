import { Component, Input } from '@angular/core';
import { DriverCardComponent } from '../driver-card/driver-card.component';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [DriverCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  @Input() players: Player[] = [];
}
