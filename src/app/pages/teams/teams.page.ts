import { Component, OnInit } from '@angular/core';
import { TeamCardComponent } from '../../components/team-card/team-card.component';
import { TeamService } from '../../services/team.service';
import { Team } from '../../interfaces/team.interface';

@Component({
  selector: 'app-teams-page',
  standalone: true,
  imports: [TeamCardComponent],
  templateUrl: './teams.page.html',
  styleUrl: './teams.page.css'
})
export class TeamsPage implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
  }
}
