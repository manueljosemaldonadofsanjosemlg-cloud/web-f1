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
      
      const countryNames: { [key: string]: string } = {
        'GB': 'gran bretaña reino unido england inglaterra uk',
        'ES': 'españa spain',
        'NL': 'países bajos holanda netherlands',
        'MC': 'mónaco monaco',
        'MX': 'méxico mexico',
        'FR': 'francia france',
        'TH': 'tailandia thailand',
        'AU': 'australia',
        'NZ': 'nueva zelanda new zealand',
        'IT': 'italia italy',
        'DE': 'alemania germany',
        'BR': 'brasil brazil',
        'FI': 'finlandia finland',
        'AR': 'argentina',
        'CA': 'canadá canada'
      };

      this.filteredPlayers = this.allPlayers.filter(player => {
        const countryMatch = (countryNames[player.country] || '').toLowerCase();
        return player.name.toLowerCase().includes(term) ||
               player.team.toLowerCase().includes(term) ||
               player.country.toLowerCase().includes(term) ||
               countryMatch.includes(term);
      });
    }
  }
}
