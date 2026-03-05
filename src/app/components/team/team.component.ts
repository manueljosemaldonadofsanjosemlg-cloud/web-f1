import { Component, Input } from '@angular/core';
import { DriverCardComponent } from '../driver-card/driver-card.component';
import { DriverModalComponent } from '../driver-modal/driver-modal.component';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [DriverCardComponent, DriverModalComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  @Input() players: Player[] = [];
  selectedDriver: Player | null = null;

  openModal(driver: Player): void {
    this.selectedDriver = driver;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedDriver = null;
    document.body.style.overflow = '';
  }
}
