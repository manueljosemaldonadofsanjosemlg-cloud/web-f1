import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() cardClicked = new EventEmitter<Player>();

  onCardClick(): void {
    this.cardClicked.emit(this.driver);
  }

  getFlagEmoji(countryCode: string): string {
    if (countryCode === 'GB') return '🇬🇧';
    if (countryCode === 'ES') return '🇪🇸';
    if (countryCode === 'NL') return '🇳🇱';
    if (countryCode === 'MC') return '🇲🇨';
    if (countryCode === 'MX') return '🇲🇽';
    if (countryCode === 'FR') return '🇫🇷';
    if (countryCode === 'TH') return '🇹🇭';
    if (countryCode === 'AU') return '🇦🇺';
    if (countryCode === 'NZ') return '🇳🇿';
    if (countryCode === 'IT') return '🇮🇹';
    if (countryCode === 'DE') return '🇩🇪';
    if (countryCode === 'BR') return '🇧🇷';
    if (countryCode === 'FI') return '🇫🇮';
    if (countryCode === 'AR') return '🇦🇷';
    if (countryCode === 'CA') return '🇨🇦';

    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  getCountryName(countryCode: string): string {
    const countries: { [key: string]: string } = {
      'GB': 'Gran Bretaña Reino Unido England Inglaterra',
      'ES': 'España Spain',
      'NL': 'Países Bajos Holanda Netherlands',
      'MC': 'Mónaco Monaco',
      'MX': 'México Mexico',
      'FR': 'Francia France',
      'TH': 'Tailandia Thailand',
      'AU': 'Australia',
      'NZ': 'Nueva Zelanda New Zealand',
      'IT': 'Italia Italy',
      'DE': 'Alemania Germany',
      'BR': 'Brasil Brazil',
      'FI': 'Finlandia Finland',
      'AR': 'Argentina',
      'CA': 'Canadá Canada'
    };
    return countries[countryCode] || countryCode;
  }
}
