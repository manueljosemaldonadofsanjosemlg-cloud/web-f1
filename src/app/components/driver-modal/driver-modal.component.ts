import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-driver-modal',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './driver-modal.component.html',
  styleUrls: ['./driver-modal.component.css']
})
export class DriverModalComponent {
  @Input() driver!: Player;
  @Output() closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  getFlagEmoji(countryCode: string): string {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  getCountryName(countryCode: string): string {
    const countries: { [key: string]: string } = {
      'GB': 'Gran Bretaña',
      'ES': 'España',
      'NL': 'Países Bajos',
      'MC': 'Mónaco',
      'MX': 'México',
      'FR': 'Francia',
      'TH': 'Tailandia',
      'AU': 'Australia',
      'NZ': 'Nueva Zelanda',
      'IT': 'Italia',
      'DE': 'Alemania',
      'BR': 'Brasil',
      'FI': 'Finlandia',
      'AR': 'Argentina',
      'CA': 'Canadá'
    };
    return countries[countryCode] || countryCode;
  }
}
