import { Component, Input } from '@angular/core';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-driver-card',
  standalone: true,
  imports: [],
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent {
  @Input() driver!: Player;

  convocar(): void {
    alert(`🏁 Has convocado a ${this.driver.name}`);
    console.log(`Has convocado a ${this.driver.name}`);
  }
}
