import { Component, OnInit } from '@angular/core';
import { TeamComponent } from '../../components/team/team.component';
import { TeamService } from '../../services/team.service';
import { Player } from '../../interfaces/player.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drivers-page',
  standalone: true,
  imports: [TeamComponent, FormsModule],
  templateUrl: './drivers.page.html',
  styleUrl: './drivers.page.css'
})
export class DriversPage implements OnInit {
  allPlayers: Player[] = [];
  filteredPlayers: Player[] = [];
  searchTerm: string = '';

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.allPlayers = this.teamService.getPlayers();
    this.filteredPlayers = this.allPlayers;
  }

  onSearchChange(): void {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.filteredPlayers = this.allPlayers;
    } else {
      const term = this.searchTerm.toLowerCase().trim();
      this.filteredPlayers = this.allPlayers.filter(player =>
        player.name.toLowerCase().includes(term) ||
        player.team.toLowerCase().includes(term)
      );
    }
  }
}
