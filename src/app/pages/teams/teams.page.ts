import { Component, OnInit } from '@angular/core';
import { TeamCardComponent } from '../../components/team-card/team-card.component';
import { DriverCardComponent } from '../../components/driver-card/driver-card.component';
import { TeamService } from '../../services/team.service';
import { Team } from '../../interfaces/team.interface';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-teams-page',
  standalone: true,
  imports: [TeamCardComponent, DriverCardComponent],
  templateUrl: './teams.page.html',
  styleUrl: './teams.page.css'
})
export class TeamsPage implements OnInit {
  teams: Team[] = [];
  selectedDriver: Player | null = null;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
  }

  selectDriver(name: string): void {
    const driver = this.teamService.getPlayerByName(name);
    if (driver) {
      this.selectedDriver = driver;
    }
  }

  closeModal(): void {
    this.selectedDriver = null;
  }
}
